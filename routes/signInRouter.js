const express = require("express");
const router = express.Router();

const userSignInController = require("../controllers/signInControllers/userSignInController");
const adminSignInController = require("../controllers/signInControllers/adminSignInController");
const attendantSignInController = require("../controllers/signInControllers/AttendantSignInController");
const organizationSignInController = require("../controllers/signInControllers/organizationSignInController");

router.post("/user", (req, res) => {
  userSignInController(req, res);
});

router.post("/admin", (req, res) => {
  adminSignInController(req, res);
});

router.post("/attendant", (req, res) => {
  attendantSignInController(req, res);
});

router.post("/organization", (req, res) => {
  organizationSignInController(req, res);
});

module.exports = router;
