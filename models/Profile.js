const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  currentCompany: {
    type: String,
  },
  currentFunction: {
    type: String,
  },
  unemployed: {
    type: Boolean,
    default: false,
  },
  dateofbirth: {
    type: Date,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
