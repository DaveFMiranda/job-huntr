const { Schema, model } = require("mongoose");

const logSchema = new Schema({
    intercommunication: {
        type: string //won't be string
    }

});
const ComLog = model("ComLog", logSchema);

module.exports = ComLog;