const UserModel = require("../models/user.model");

const getUserData = async (req, res, next) => {
  const { housename, gender } = req.query;
  return res.status(200).json({ status: "ok", data: { housename, gender } });
};

module.exports = { getUserData };
