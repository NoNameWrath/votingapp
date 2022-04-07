const getUserData = async (req, res, next) => {
  return res.status(200).json({ status: "ok", data: "urmom" });
};

module.exports = { getUserData };
