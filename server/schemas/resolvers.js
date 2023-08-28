const { User, Job, ComLog, CommonQuestions } = require("../models");

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
          .populate("savedJobs.contactPerson");
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
    

    updateJob: async (parent, { _id, company, role, offerMade }) => {
      const job = { _id, company, role, offerMade}
     await Job.findOneAndUpdate(
        { _id: _id },
        { company, role, offerMade },
        { new: true }
      );

      return job;
    
    throw AuthenticationError;
    ('You need to be logged in!');
  },

    addComLog: async (parent, { method, content, direction }, context) => {
      if (!context.job) {
        throw AuthenticationError;
      }
      const comLog = await ComLog.create({
        method,
        content,
        direction,
      });

      await Job.findOneAndUpdate(
        { _id: context.job._id },
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
      console.log(context.user._id);
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
  },
};

module.exports = resolvers;

