const express = require("express");
const router = express.Router();

const getAttendantsController = require("../controllers/getAttendants");
const updateAttendantLotController = require("../controllers/updateAttendantLot");

router.post("/", getAttendantsController);
router.post("/update", updateAttendantLotController);

module.exports = router;