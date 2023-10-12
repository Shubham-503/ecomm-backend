import express from "express";
import {
  createCoupon,
  deactivateCoupon,
  deleteCoupon,
  getAllCoupons,
} from "../controllers/coupons.controller.js";
import { isModerator } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/coupon", isModerator, getAllCoupons);
router.post("/coupon", isModerator, createCoupon);
router.post("/coupon/deactive/:couponId", isModerator, deactivateCoupon);
router.post("/coupon/:couponId", isModerator, deleteCoupon);

export default router;
