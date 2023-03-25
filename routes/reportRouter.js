const express = require("express");
const router = express.Router();
const getReportController = require("../controllers/getReportController");

router.post("/get-report", getReportController);

module.exports = router;
