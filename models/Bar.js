const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const barSchema = new Schema(
  {
    taskName: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    details: {
        type: String
    },
    note: {
        type: String
    },
    lastCompleted: {
        type: Date
    },
    allCompleted: {
        type: Date
    },
    taskFrequency: {
        type: String
    }

  }
);


const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;
