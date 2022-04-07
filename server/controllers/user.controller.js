const UserModel = require("../models/user.model");

const getUserData = async (req, res, next) => {
  const { house, gender } = req.query;
  const users = await UserModel.find({ house, gender });
  return res.status(200).json({ status: "ok", data: users });
};

module.exports = { getUserData };
