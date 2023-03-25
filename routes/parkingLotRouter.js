const express = require("express");
const router = express.Router();

const getAllParkingLotsController = require("../controllers/parkingLotControllers/getAllParkingLotsController");
const deleteParkingLotController = require("../controllers/parkingLotControllers/deleteParkingLotController");
const getParkingLotsController = require("../controllers/parkingLotControllers/getParkingLotsController");
const editParkingLotController = require("../controllers/parkingLotControllers/editParkingLotController");
const addParkingLotController = require("../controllers/parkingLotControllers/addParkingLotController");
const getParkingLotController = require("../controllers/parkingLotControllers/getParkingLotController");

router.post("/delete", deleteParkingLotController);
router.post("/edit", editParkingLotController);
router.get("/", getAllParkingLotsController);
router.post("/add", addParkingLotController);
router.post("/id", getParkingLotController);
router.post("/", getParkingLotsController);

module.exports = router;
