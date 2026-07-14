import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import OTP from "../models/otp.model.js";
import generateOtp from "../utils/generateOtp.js";
import sendEmail from "../utils/sendEmail.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken.js";

// ==========================
// SEND OTP
// ==========================
const sendOtp = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All required fields are mandatory.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists.",
      });
    }

    const otp = generateOtp();

    const hashedPassword = await bcrypt.hash(password, 10);

    await OTP.deleteMany({ email });

    await OTP.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    await sendEmail(email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// VERIFY OTP
// ==========================
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required.",
      });
    }

    const otpData = await OTP.findOne({ email });

    if (!otpData) {
      return res.status(404).json({
        success: false,
        message: "OTP not found.",
      });
    }

    if (otpData.expiresAt < new Date()) {
      await OTP.deleteOne({ email });

      return res.status(400).json({
        success: false,
        message: "OTP has expired.",
      });
    }

    if (otpData.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP.",
      });
    }

    const user = await User.create({
      fullName: otpData.fullName,
      email: otpData.email,
      password: otpData.password,
      phoneNumber: otpData.phoneNumber,
    });

    const accessToken = generateAccessToken(user._id);

    const refreshToken = generateRefreshToken(user._id);

    user.refreshToken = refreshToken;

    await user.save();

    const safeUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    await OTP.deleteOne({ email });

    return res
      .status(201)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000,
      })

      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: "Account created successfully.",
        accessToken,
        user: safeUser
      });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { sendOtp, verifyOtp };