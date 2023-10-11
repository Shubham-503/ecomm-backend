import express from "express";
import {
  createCollection,
  deleteCollection,
  getAllCollections,
  updateCollection,
} from "../controllers/collection.controller.js";
import { isModerator } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/collections", getAllCollections);
router.post("/collection", isModerator, createCollection);
router.put("/collection/:id", isModerator, updateCollection);
router.delete("/collection/:id", isModerator, deleteCollection);

export default router;
