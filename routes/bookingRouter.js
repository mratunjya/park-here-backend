const express = require("express");
const router = express.Router();

const confirmBookingController = require("../controllers/confirmBookingController");
const bookedHistoryController = require("../controllers/bookedHistoryController");
const getBookingsController = require("../controllers/getBookingsController");
const bookingController = require("../controllers/bookingController");
const bookedController = require("../controllers/bookedController");

router.post("/booked-history", bookedHistoryController);
router.post("/confirm", confirmBookingController);
router.post("/history", getBookingsController);
router.post("/create", bookingController);
router.post("/booked", bookedController);

module.exports = router;
