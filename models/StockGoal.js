const mongoose = require("mongoose");

const StockGoalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
});

module.exports = StockGoal = mongoose.model("stockgoal", StockGoalSchema);
