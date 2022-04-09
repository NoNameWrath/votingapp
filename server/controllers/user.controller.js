const UserModel = require("../models/user.model");

const getUserData = async (req, res, next) => {
  const { house, gender } = req.query;
  const users = await UserModel.find({ house, gender });
  return res.status(200).json({ status: "ok", data: users });
};

const addUser = async (req, res, next) => {
  const { name, grade, section, gender, house } = req.body;

  const user = await UserModel.create({ name, grade, section, gender, house });
  console.log(user);
  return res.status(200).json({ status: "ok" });
};

module.exports = { getUserData, addUser };
