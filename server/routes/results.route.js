const express = require("express");
const router = express.Router();

const { getResults } = require("../controllers/results.controller");

router.route("/").get(getResults);

module.exports = router;
