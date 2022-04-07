const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
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
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
