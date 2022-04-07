const mongoose = require("mongoose");
const { Schema } = mongoose;

const VoteSchema = mongoose.Schema({
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
  voteCount: {
    type: Number,
    default: 0,
  },
  voters: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Vote", VoteSchema);
