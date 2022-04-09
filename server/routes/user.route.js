const express = require("express");
const router = express.Router();

const { getUserData, addUser } = require("../controllers/user.controller");

router.route("/").get(getUserData);
router.route("/add").post(addUser);

module.exports = router;
