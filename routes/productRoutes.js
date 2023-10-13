import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.post("/product", addProduct);

export default router;
