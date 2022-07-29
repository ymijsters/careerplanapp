const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  duedate: {
    type: Date,
  },
  color: {
    type: String,
  },
  stockgoal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "stockgoal",
  },
  creationData: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Goal = mongoose.model("goal", GoalSchema);
