const express = require("express");
const router = express.Router();
const tokenUserController = require("../controllers/tokenUserController");

router.post("/", tokenUserController);

module.exports = router;
