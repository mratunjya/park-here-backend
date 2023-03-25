const express = require("express");
const router = express.Router();

const confirmBookingController = require("../controllers/bookingControllers/confirmBookingController");
const bookedHistoryController = require("../controllers/bookingControllers/bookedHistoryController");
const getBookingsController = require("../controllers/bookingControllers/getBookingsController");
const bookingController = require("../controllers/bookingControllers/bookingController");
const bookedController = require("../controllers/bookingControllers/bookedController");

router.post("/booked-history", bookedHistoryController);
router.post("/confirm", confirmBookingController);
router.post("/history", getBookingsController);
router.post("/create", bookingController);
router.post("/booked", bookedController);

module.exports = router;
