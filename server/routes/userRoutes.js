import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
  updateUserByAdmin,
} from "../controllers/userControllers";
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

const router = express.Router();
router.get("/user", [verifyAccessToken, isAdmin], getUsers);
router.delete("/user", [verifyAccessToken, isAdmin], deleteUser);
router.put("/user/current", [verifyAccessToken], updateUser);
router.put("/user/:uid", [verifyAccessToken, isAdmin], updateUserByAdmin);

export default router;
// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee
// CREATE (POST) + PUT - body
// GET + DELETE - query // ?fdfdsf&fdfs
