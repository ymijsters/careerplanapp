const mongoose = require("mongoose");

const Goalschema = new mongoose.Schema({
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
    required: true,
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
});

module.exports = Goal = mongoose.model("goal", GoalSchema);
