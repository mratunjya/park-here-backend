const express = require("express");
const router = express.Router();

const updateOrganization = require("../controllers/updateControllers/organizationUpdateController");
const updateAttendant = require("../controllers/updateControllers/attendantUpdateController");
const updateAdmin = require("../controllers/updateControllers/adminUpdateController");
const updateUser = require("../controllers/updateControllers/userUpdateController");

router.post("/organization", updateOrganization);
router.post("/attendant", updateAttendant);
router.post("/admin", updateAdmin);
router.post("/user", updateUser);

module.exports = router;
