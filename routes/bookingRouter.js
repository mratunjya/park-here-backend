const express = require("express");
const router = express.Router();

const getBookingsController = require("../controllers/getBookingsController");
const bookingController = require("../controllers/bookingController");
const bookedController = require("../controllers/bookedController");

router.post("/history", getBookingsController);
router.post("/create", bookingController);
router.post("/booked", bookedController);

module.exports = router;
