const signUpController = require("../controllers/signUpController");
const express = require("express");
const router = express.Router();

router.post("/", signUpController);

module.exports = router;
