const {
  User,
  Job,
  ComLog,
  CommonQuestions,
  EmploymentTerms,
} = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("savedJobs")
          .populate("savedJobs.contactPerson")
          .populate("savedQuestions")
          .populate("employmentTerms");
      }
      throw AuthenticationError;
    },
    jobs: async () => {
      return Job.find();
    },
    job: async (parent, { _id }) => {
      return Job.findOne({ _id })
        .populate("contactPerson")
        .populate("comLogArray");
    },
    comLogs: async () => {
      return ComLog.find();
    },
    comLog: async () => {
      return ComLog.findOne({ _id });
    },
    questions: async () => {
      return CommonQuestions.find();
    },
    question: async (_parent, { _id }) => {
      return CommonQuestions.findOne({ _id });
    },
    terms: async () => {
      return User.findOne({_id}).populate('employmentTerms');
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { username, email, password, firstName, lastName }
    ) => {
      const user = await User.create({
        username,
        email,
        password,
        firstName,
        lastName,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addJob: async (
      parent,
      { company, role, advertisedSalary, offerMade, contactPerson },
      context
    ) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      const job = await Job.create({
        company,
        role,
        advertisedSalary,
        offerMade,
        contactPerson,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedJobs: job._id } },
        { new: true, runValidators: true }
      );
      return job;
    },

    updateContactPerson: async (parent, { _id, contactPerson }) => {
      const job = { _id, contactPerson };
      await Job.findOneAndUpdate(
        { _id: _id },
        { contactPerson },
        { new: true }
      );
      return job.contactPerson;
    },

    deleteContactPerson: async (parent, { _id }) => {
      const deletedContactPerson = job.contactPerson;
      await Job.findOneAndUpdate(
        { _id: _id },
        { contactPerson: null },
        { new: true }
      );
      return deletedContactPerson;
    },


    updateJob: async (parent, { _id, company, role, offerMade }) => {
      const job = { _id, company, role, offerMade };
      await Job.findOneAndUpdate(
        { _id: _id },
        { company, role, offerMade },
        { new: true }
      );

      return job;
    },
    deleteJob: async (parent, { _id }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const job = await Job.findOneAndDelete({ _id: _id });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedJobs: job._id } }
      );

      return job;
    },

    addComLog: async (
      parent,
      { jobId, method, content, direction },
      context
    ) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      const comLog = await ComLog.create({
        method,
        content,
        direction,
      });

      await Job.findOneAndUpdate(
        { _id: jobId },
        { $addToSet: { comLogArray: comLog._id } },
        { new: true, runValidators: true }
      );
      return comLog;
    },

    addQuestion: async (_parent, { question, response }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      const newQuestion = await CommonQuestions.create({
        question,
        response,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedQuestions: newQuestion._id } },
        { new: true, runValidators: true }
      );
      console.log("new question added:", newQuestion);
      return newQuestion;
    },
    updateQuestion: async (_parent, { _id, question, response }) => {
      const updatedQuestion = { _id, question, response };
      await CommonQuestions.findOneAndUpdate(
        { _id: _id },
        { question, response },
        { new: true }
      );

      return updatedQuestion;
    },
    addEmploymentTerms: async (
      parent,
      { EmploymentTermsInput },
      context
    ) => {
      const newTerms = { EmploymentTermsInput };
      await EmploymentTerms.create(
        {
          tenure: EmploymentTermsInput.tenure,
          salary: EmploymentTermsInput.salary,
          insurance: EmploymentTermsInput.insurance,
          location: EmploymentTermsInput.location,
          flexibleHours: EmploymentTermsInput.flexibleHours,
          PTO: EmploymentTermsInput.PTO,
          retirement: EmploymentTermsInput.retirement,
          parentalLeave: EmploymentTermsInput.parentalLeave,
          training: EmploymentTermsInput.training,
          mentorship: EmploymentTermsInput.mentorship,
          notes: EmploymentTermsInput.notes,
        },
        { new: true }
      );

      await User.findOneAndUpdate(
        { _id: context.user._id },
        // THIS might be an issue, might need to destructure ETI
        { employmentTerms: EmploymentTermsInput },
        { new: true, runValidators: true }
      );
      return newTerms;
    },
  },
};

module.exports = resolvers;
