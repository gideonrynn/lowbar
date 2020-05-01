const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
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


const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
