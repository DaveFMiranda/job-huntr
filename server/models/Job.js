const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const schema = Schema({
  createdAt: Number,
  updatedAt: Number,
  name: String
}, {
  // Make Mongoose use Unix time (seconds since Jan 1, 1970)
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

const jobSchema = new Schema({
  company: {
    type: String,
    required: true,
  },

  role:{
    type: String,
    required: true,
  },

  advertisedSalary: {
    type: Number
  },

// contactPerson: [
//   // this is a separate entry that should populate with contactSchema
// // name:
// // phone:
// // email:

// ],

//   communicationLog: [
// // incoming vs. outgoing
// // time and date stamp
// // form of communication: eg email vs. phone vs. in person
// // note:
// // next step
//   ]

offer: {
  type: Boolean,
},

timestamps: true 
// This option adds createdAt and updatedAt fields

});


const Job = model('Job', jobSchema);

module.exports = Job;
