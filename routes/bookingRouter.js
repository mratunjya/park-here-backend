const express = require("express");
const router = express.Router();

const getBookingsController = require("../controllers/getBookingsController");
const bookingController = require("../controllers/bookingController");

router.post("/history", getBookingsController);
router.post("/create", bookingController);

module.exports = router;
