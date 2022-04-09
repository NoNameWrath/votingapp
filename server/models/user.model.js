const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  grade: {
    type: Number,
  },
  section: {
    type: String,
  },
  house: {
    type: String,
    enum: ["godavari", "narmada", "cauvery", "sutlej"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  voted: {
    type: Boolean,
    default: false,
  },
  choice: {
    type: Schema.Types.ObjectId,
    ref: "Vote",
  },
});

module.exports = mongoose.model("User", UserSchema);
