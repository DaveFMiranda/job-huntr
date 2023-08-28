const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
    question:{
        type: String,
        required: true,
    },
    response: {
        type: String,
        required: true,
    },

  });
  const CommonQuestions = model("CommonQuestions", questionSchema);
  
  module.exports = CommonQuestions;