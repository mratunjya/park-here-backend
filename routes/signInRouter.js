const express = require("express");
const router = express.Router();
const signInController = require("../controllers/signInController");

router.post("/", (req, res) => {
  signInController(req, res);
});

module.exports = router;
