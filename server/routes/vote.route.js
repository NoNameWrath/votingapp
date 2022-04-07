const express = require("express");
const router = express.Router();

const { postVote } = require("../controllers/vote.controller");

router.route("/").post(postVote);

module.exports = router;
