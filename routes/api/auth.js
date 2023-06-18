const express = require("express");
const { validBody, authenticate, upload } = require("../../midelwares");
const { schemas } = require("../../models/user");
const router = express.Router();

const {
  register,
  login,
  logout,
  getCurrent,
  updateAvatar,
  verifyEmail,
  resendVerify,
} = require("../../controllers/auth");

router.post("/register", validBody(schemas.universalSchema), register);

router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", validBody(schemas.emailSchema), resendVerify);

router.post("/login", validBody(schemas.universalSchema), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
