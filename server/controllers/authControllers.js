import User from "../models/userModels";
import crypto from "crypto";
import asyncHandler from "express-async-handler";

export const register = asyncHandler(async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  if (!email || !password || !lastname || !firstname)
    return res.status(400).json({
      sucess: false,
      mes: "Missing inputs",
    });

  const user = await User.findOne({ email });
  if (user) throw new Error("User has existed");
  else {
    const newUser = await User.create(req.body);
    return res.status(200).json({
      newUser,
      sucess: newUser ? true : false,
      mes: newUser
        ? "Register is successfully. Please go login~"
        : "Something went wrong",
    });
  }
});

// Refresh token => Cấp mới access token
// Access token => Xác thực người dùng, quân quyên người dùng
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({
      sucess: false,
      mes: "Missing inputs",
    });
  // plain object
  const response = await User.findOne({ email });

  if (response && (await response.isCorrectPassword(password))) {
    const { password, role, ...userData } = response;
    return res.status(200).json({
      sucess: true,
      userData,
    });
  } else {
    throw new Error("Invalid credentials!");
  }
});
