const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    advertisedSalary: {
      type: Number,
    },

    // contactPeople: ["contactSchema"],

    //   communicationLogs: [
    // communicationLogsSchema
    // // incoming vs. outgoing
    // // time and date stamp
    // // form of communication: eg email vs. phone vs. in person
    // // note:
    // // next step
    //   ]

    offerMade: {
      type: Boolean,
    },
    contactPerson: {
      name: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        required: false,
      },
      email: {
        type: String,
        required: false,
        match: [/.+@.+\..+/, "Must use a valid email address"],
      },
      notes: {
        type: String,
        required: false,
      },
    },
    comLogArray: [
      {
        type: Schema.Types.ObjectId,
        ref: "ComLog",
      },
    ],
    default: []
  },

  { timeStamp: true }
  
);

const Job = model("Job", jobSchema);

module.exports = Job;
