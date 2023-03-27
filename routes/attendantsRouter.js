const express = require("express");
const router = express.Router();

const getAttendantsController = require("../controllers/getAttendants");

router.post("/", getAttendantsController);

module.exports = router;