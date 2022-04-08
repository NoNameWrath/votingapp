const VoteModel = require("../models/votes.model");

const getResults = async (req, res, next) => {
  const results = await VoteModel.find();
  return res.status(200).json({ status: "ok", data: results });
};

module.exports = { getResults };
