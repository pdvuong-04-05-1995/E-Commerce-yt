import express from "express";
import {
  login,
  register,
  getCurrent,
  refreshAccessToken,
  logout,
  forgotPassword,
  resetPassword,
} from "../controllers/authControllers";
import { verifyAccessToken, isAdmin } from "../middlewares/verifyToken";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/current", verifyAccessToken, getCurrent);
router.post("/refresh-token", refreshAccessToken);
router.get("/logout", logout);
router.get("/forgot-password", forgotPassword);
router.put("/resetpassword", resetPassword);

export default router;
