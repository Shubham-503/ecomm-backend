import express from "express";

import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import couponRoutes from "./routes/couponRoutes.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dysvuuvmm",
  api_key: "643825173662588",
  api_secret: "VdUL13e5y4iOzAOwWwWyvQSNDIg",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//morgan logger
app.use(morgan("tiny"));

// routes
app.use("/api/v1/auth/", authRoutes);
app.use("/api/v1/", collectionRoutes);
app.use("/api/v1/", productRoutes);
app.use("/api/v1/", couponRoutes);

export default app;
