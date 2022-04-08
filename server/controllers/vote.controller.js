const VoteModel = require("../models/votes.model");
const UserModel = require("../models/user.model");

const postVote = async (req, res, next) => {
  const { userid, choice } = req.body;
  // get userid and choice docs and update

  await UserModel.findByIdAndUpdate(userid, {
    choice: choice,
    voted: true,
  });

  await VoteModel.findByIdAndUpdate(choice, {
    $inc: { voteCount: 1 },
    $push: { voters: userid },
  });

  // choice update
  return res.status(200).json({ status: "ok" });
};

const getCaptains = async (req, res, next) => {
  const { house, gender } = req.query;
  const captains = await VoteModel.find({ house, gender }).select("name image");
  return res.status(200).json({ status: "ok", data: captains });
};

module.exports = { postVote, getCaptains };
