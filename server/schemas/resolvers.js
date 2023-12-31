const {
  User,
  Job,
  ComLog,
  Contact,
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
    questions: async (_parent, args, context) => {
      if (context.user) {
        const { savedQuestions } = await User.findOne({
          _id: context.user._id,
        }).populate("savedQuestions");
        return savedQuestions;
      }
      throw AuthenticationError;
    },
    question: async (_parent, { _id }) => {
      return CommonQuestions.findOne({ _id });
    },
    contacts: async () => {
      return Contact.find();
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
      { company, role, advertisedSalary, offerMade },
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
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedJobs: job._id } },
        { new: true, runValidators: true }
      );
      return job;
    },

    addContactPerson: async (
      parent,
      { jobId, name, role, phone, email, notes }
    ) => {
      const contactPerson = await Contact.create({
        name,
        role,
        phone,
        email,
        notes,
      });

      await Job.findOneAndUpdate(
        { _id: jobId },
        { contactPerson: contactPerson._id },
        { new: true, runValidators: true }
      );
      return contactPerson;
    },

    updateContactPerson: async (
      parent,
      { _id, name, role, phone, email, notes }
    ) => {
      const contactPerson = { _id, name, role, phone, email, notes };
      await Contact.findOneAndUpdate(
        { _id: _id },
        { name, role, phone, email, notes },
        { new: true }
      );
      return contactPerson;
    },

    deleteContactPerson: async (parent, { contactId: _id, jobId }) => {
      await Job.findOneAndUpdate(
        { _id: jobId },
        { contactPerson: null },
        { new: true }
      );
      const deletedContactPerson = await Contact.findOneAndDelete({ _id });

      return deletedContactPerson;
    },

    updateJob: async (
      parent,
      { _id, company, advertisedSalary, role, offerMade }
    ) => {
      const job = { _id, company, advertisedSalary, role, offerMade };
      await Job.findOneAndUpdate(
        { _id: _id },
        { company, advertisedSalary, role, offerMade },
        { new: true }
      );

      return job;
    },
    deleteJob: async (parent, { _id }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const job = await Job.findOneAndDelete({ _id });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedJobs: job._id } }
      );

      return true;
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

    updateComLog: async (
      parent,
      { _id, method, content, direction },
      context
    ) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      const comLog = { _id, method, content, direction };
      await ComLog.findOneAndUpdate(
        { _id: _id },
        { method, content, direction },
        { new: true }
      );

      return comLog;
    },

    deleteComLog: async (parent, { _id, jobId }) => {
      const comLog = await ComLog.findOneAndDelete({ _id });

      await Job.findOneAndUpdate(
        { _id: jobId },
        { $pull: { comLogArray: _id } }
      );

      return true;
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

    deleteQuestion: async (_parent, { _id, questionId }, context) => {
      const question = await CommonQuestions.findOneAndDelete({ _id });

      await CommonQuestions.findOneAndUpdate(
        { _id: questionId },
        { $pull: { questionArray: _id } }
      );
      return true;
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
    addEmploymentTerms: async (parent, { EmploymentTermsInput }, context) => {
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
        { employmentTerms: EmploymentTermsInput },
        { new: true, runValidators: true }
      );
      return newTerms;
    },
  },
};

module.exports = resolvers;
