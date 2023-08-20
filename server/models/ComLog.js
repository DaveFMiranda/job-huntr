const { Schema, model } = require("mongoose");

const logSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    Required: false,
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
});
const ComLog = model("ComLog", logSchema);

module.exports = ComLog;