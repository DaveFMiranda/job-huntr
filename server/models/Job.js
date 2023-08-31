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
      type: Schema.Types.ObjectId,
      ref: "Contact",
    },
    comLogArray: [
      {
        type: Schema.Types.ObjectId,
        ref: "ComLog",
      },
    ],
    default: [],
  },

  { timestamps: true }
);

const Job = model("Job", jobSchema);

module.exports = Job;
