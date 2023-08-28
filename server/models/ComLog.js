const { Schema, model } = require("mongoose");

const comLogSchema = new Schema(
  {
    method: {
      type: String,
      enum: ["website", "email", "phone", "in-person"],
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      enum: ["incoming", "outgoing"],
      required: true,
    },
  },

  { timestamps: true }
);

const ComLog = model("ComLog", comLogSchema);

module.exports = ComLog;
