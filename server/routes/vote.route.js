const express = require("express");
const router = express.Router();

const { postVote, getCaptains } = require("../controllers/vote.controller");

router.route("/").post(postVote).get(getCaptains);

module.exports = router;
