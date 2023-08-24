const { User, Job, ComLog } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
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

    // addComment: async (parent, { thoughtId, commentText }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $addToSet: {
    //           comments: { commentText, commentAuthor: context.user.username },
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw AuthenticationError;
    // },
    // removeThought: async (parent, { thoughtId }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.findOneAndDelete({
    //       _id: thoughtId,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw AuthenticationError;
    // },
    // removeComment: async (parent, { thoughtId, commentId }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $pull: {
    //           comments: {
    //             _id: commentId,
    //             commentAuthor: context.user.username,
    //           },
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw AuthenticationError;
    // },
  },
};

module.exports = resolvers;
