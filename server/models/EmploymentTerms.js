const { Schema, model } = require("mongoose");

const employmentTermsSchema = new Schema(
  {
    tenure: {
      type: String,
      // enum: ['full-time', 'part-time', 'temporary']
    },
    salary: {
      type: Number,
    },
    insurance: {
      type: Boolean,
    },
    location: {
      type: String,
      // enum: ["in person", "hybrid", "remote"]
    },
    flexibleHours: {
      type: Boolean
    },
    PTO: {
      type: Number
    },
    retirement: {
      type: Boolean
    },
    parentalLeave: {
      type: Boolean
    },
    training: {
      type: Boolean
    },
    mentorship: {
      type: Boolean
    },
    notes: {
      type: String
    }

/*
bonuses: boolean
holidays?
sick time?
*/

/*
OTHER POSSIBLE FIELDS TO ADD HERE:
- company size
- industry (tech vs. not)
    - fintech
    - education
    - games
    - other
    - MORE FIELDS HERE
- 
*/

  },
);

const EmploymentTerms = model("EmploymentTerms", employmentTermsSchema);

module.exports = EmploymentTerms;
