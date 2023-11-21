import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
  updateUserByAdmin,
} from "../controllers/userControllers";
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

const router = express.Router();
router.get("/", [verifyAccessToken, isAdmin], getUsers);
router.delete("/", [verifyAccessToken, isAdmin], deleteUser);
router.put("/current", [verifyAccessToken], updateUser);
router.put("/:uid", [verifyAccessToken, isAdmin], updateUserByAdmin);

export default router;
// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee
// CREATE (POST) + PUT - body
// GET + DELETE - query // ?fdfdsf&fdfs
