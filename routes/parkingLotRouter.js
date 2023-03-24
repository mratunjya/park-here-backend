const express = require("express");
const router = express.Router();

const getAllParkingLotsController = require("../controllers/getAllParkingLotsController");
const deleteParkingLotController = require("../controllers/deleteParkingLotController");
const editParkingLotController = require("../controllers/editParkingLotController");
const addParkingLotController = require("../controllers/addParkingLotController");
const getParkingLotController = require("../controllers/getParkingLotController");

router.post("/delete", deleteParkingLotController);
router.post("/edit", editParkingLotController);
router.get("/", getAllParkingLotsController);
router.post("/add", addParkingLotController);
router.post("/", getParkingLotController);

module.exports = router;
