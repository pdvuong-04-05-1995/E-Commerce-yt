import express from "express";
import {
  login,
  register,
  getCurrent,
  refreshAccessToken,
} from "../controllers/authControllers";
import { verifyAccessToken, isAdmin } from "../middlewares/verifyToken";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/current", verifyAccessToken, getCurrent);
router.post("/refreshtoken", refreshAccessToken);

export default router;
