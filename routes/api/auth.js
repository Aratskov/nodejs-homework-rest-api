const express = require("express");
const { validBody, authenticate } = require("../../midelwares");
const { schemas } = require("../../models/user");
const router = express.Router();

const { register, login, logout, getCurrent } = require("../../controllers/auth");

router.post("/register", validBody(schemas.universalSchema), register);
router.post("/login", validBody(schemas.universalSchema), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);

module.exports = router;
