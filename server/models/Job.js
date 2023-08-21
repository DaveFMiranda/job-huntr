const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const jobSchema = new Schema({
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

  // contactPerson: [
  //   // this is a separate entry that should populate with contactSchema
  //   // name:
  //   // phone:
  //   // email:
  // ],

  // communicationLog: [
  //   // incoming vs. outgoing
  //   // time and date stamp
  //   // form of communication: eg email vs. phone vs. in person
  //   // note:
  //   // next step
  // ],

  offer: {
    type: Boolean,
  },

  timestamps: {
    type: Date,
    default: Date.now,
  },
});

const Job = model('Job', jobSchema);

module.exports = Job;
