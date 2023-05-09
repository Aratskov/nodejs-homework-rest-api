const express = require("express");
const { validBody, isValidId } = require("../../midelwares");
const { schemas } = require("../../models/user");
const router = express.Router();

const { register, login } = require("../../controllers/auth");

router.post("/register", validBody(schemas.registerSchema), register);
router.post("/login", validBody(schemas.loginSchema), login);

module.exports = router;
