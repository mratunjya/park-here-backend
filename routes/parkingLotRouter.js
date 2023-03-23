const express = require("express");
const router = express.Router();

const deleteParkingLotController = require("../controllers/deleteParkingLotController");
const addParkingLotController = require("../controllers/addParkingLotController");
const getParkingLotController = require("../controllers/getParkingLotController");

router.post("/delete", deleteParkingLotController);
router.post("/add", addParkingLotController);
router.post("/", getParkingLotController);

module.exports = router;
