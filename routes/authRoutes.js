// const express = require("express");
import express from "express";
const router = express.Router();
import {
  login,
  logout,
  signUp,
  forgotPassword,
  resetPassword,
  changePassword,
  getProfile,
} from "../controllers/auth.controller.js";
import { isAdmin } from "../middlewares/auth.middleware.js";

router.post("/signup", signUp);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgot", forgotPassword);
router.post("/password/reset/:resetToken", resetPassword);
router.post("/password/change", changePassword);
router.post("/profile", getProfile);
router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "testing",
  });
});

export default router;
