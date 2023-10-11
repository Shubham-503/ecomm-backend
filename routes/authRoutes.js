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

router.post("/registeruser", signUp);
router.post("/loginuser", login);
router.get("/logoutuser", logout);
router.post("/forgotpassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.post("/changepassword", changePassword);
router.post("/user", getProfile);
router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "testing",
  });
});

export default router;
