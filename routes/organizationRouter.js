const express = require("express");
const router = express.Router();
const organizationNameController = require("../controllers/organizationNameController");

router.get("/names", organizationNameController);

module.exports = router;
