const express = require("express");
const router = express.Router();

const userSignUpController = require("../controllers/signUpControllers/userSignUpController");
const adminSignUpController = require("../controllers/signUpControllers/adminSignUpController");
const attendantSignUpController = require("../controllers/signUpControllers/attendantSignUpController");
const organizationSignUpController = require("../controllers/signUpControllers/organizationSignUpController");

router.post("/user", userSignUpController);
router.post("/admin", adminSignUpController);
router.post("/attendant", attendantSignUpController);
router.post("/organization", organizationSignUpController);

module.exports = router;
