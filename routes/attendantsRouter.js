const express = require("express");
const router = express.Router();

const getAttendantsController = require("../controllers/getAttendants");
const deleteAttendantController = require("../controllers/deleteAttendant");
const updateAttendantLotController = require("../controllers/updateAttendantLot");

router.post("/", getAttendantsController);
router.post("/delete", deleteAttendantController);
router.post("/update", updateAttendantLotController);

module.exports = router;