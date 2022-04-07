const express = require("express");
const router = express.Router();

const { getUserData } = require("../controllers/user.controller");

router.route("/").get(getUserData);

module.exports = router;
