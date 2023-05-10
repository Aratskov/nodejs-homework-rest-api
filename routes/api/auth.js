const express = require("express");
const { validBody, authenticate } = require("../../midelwares");
const { schemas } = require("../../models/user");
const router = express.Router();

const { register, login, logout } = require("../../controllers/auth");

router.post("/register", validBody(schemas.registerSchema), register);
router.post("/login", validBody(schemas.loginSchema), login);
router.post("/logout", authenticate, logout);

module.exports = router;
