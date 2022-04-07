const postVote = async (req, res, next) => {
  return res.status(200).json({ status: "ok", data: "urmom" });
};

module.exports = { postVote };
