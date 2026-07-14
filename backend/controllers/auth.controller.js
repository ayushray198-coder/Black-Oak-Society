import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import OTP from "../models/otp.model.js";
import generateOtp from "../utils/generateOtp.js";
import sendEmail from "../utils/sendEmail.js";
import cookieOptions from "../utils/cookiesOptions.js";
import PasswordReset from "../models/passwordReset.model.js";
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
      isVerified: true,
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
        ...cookieOptions,
        maxAge: 15 * 60 * 1000,
      })

      .cookie("refreshToken", refreshToken, {
        ...cookieOptions,
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


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Required Fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required.",
      });
    }

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Check Blocked User
    if (user.isBlocked) {
      return res.status(403).json({
        success: false,
        message: "Your account has been blocked.",
      });
    }

    // Compare Password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Generate Tokens
    const accessToken = generateAccessToken(user._id);

    const refreshToken = generateRefreshToken(user._id);

    // Save Refresh Token
    user.refreshToken = refreshToken;

    await user.save();

    // Safe User
    const safeUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    return res
      .status(200)
      .cookie("accessToken", accessToken, {
        ...cookieOptions,
        maxAge: 15 * 60 * 1000,
      })
      .cookie("refreshToken", refreshToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: "Login Successful.",
        accessToken,
        user: safeUser,
      });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getProfile = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const logoutUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      refreshToken: "",
    });

    return res
      .status(200)
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .json({
        success: true,
        message: "Logout Successful.",
      });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken =
      req.cookies.refreshToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token is required.",
      });
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.refreshToken !== refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid refresh token.",
      });
    }

    const newAccessToken = generateAccessToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", newAccessToken, {
        ...cookieOptions,
        maxAge: 15 * 60 * 1000,
      })
      .json({
        success: true,
        message: "Access token refreshed successfully.",
        accessToken: newAccessToken,
      });

  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired refresh token.",
    });
  }
};



const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    // Check Email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    // Find Existing OTP Record
    const otpData = await OTP.findOne({ email });

    if (!otpData) {
      return res.status(404).json({
        success: false,
        message: "No pending signup found.",
      });
    }

    // Generate New OTP
    const newOtp = generateOtp();

    // Update OTP & Expiry
    otpData.otp = newOtp;
    otpData.expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await otpData.save();

    // Send New OTP
    await sendEmail(email, newOtp);

    return res.status(200).json({
      success: true,
      message: "New OTP sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check Email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    // Check User Exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Delete Previous Reset OTP
    await PasswordReset.deleteMany({ email });

    // Generate New OTP
    const otp = generateOtp();

    // Save OTP
    await PasswordReset.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    // Send OTP
    await sendEmail(email, otp);

    return res.status(200).json({
      success: true,
      message: "Password reset OTP sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    // Validation
    if (!email || !otp || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Email, OTP and New Password are required.",
      });
    }

    // Find Reset Record
    const resetData = await PasswordReset.findOne({ email });

    if (!resetData) {
      return res.status(404).json({
        success: false,
        message: "Reset request not found.",
      });
    }

    // Check OTP
    if (resetData.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP.",
      });
    }

    // Check Expiry
    if (resetData.expiresAt < new Date()) {
      await PasswordReset.deleteOne({ email });

      return res.status(400).json({
        success: false,
        message: "OTP has expired.",
      });
    }

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Hash New Password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update Password
    user.password = hashedPassword;

    await user.save();

    // Delete Reset OTP
    await PasswordReset.deleteOne({ email });

    return res.status(200).json({
      success: true,
      message: "Password reset successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    // Validation
    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Old Password and New Password are required.",
      });
    }

    // Get Logged In User
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Compare Old Password
    const isPasswordCorrect = await bcrypt.compare(
      oldPassword,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Old password is incorrect.",
      });
    }

    // Check Same Password
    if (oldPassword === newPassword) {
      return res.status(400).json({
        success: false,
        message: "New password must be different from old password.",
      });
    }

    // Hash New Password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update Password
    user.password = hashedPassword;

    // Security: Remove Refresh Token
    user.refreshToken = "";

    await user.save();

    // Clear Cookies
    return res
      .status(200)
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .json({
        success: true,
        message: "Password changed successfully. Please login again.",
      });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export {
  sendOtp,
  verifyOtp,
  resendOtp,
  forgotPassword,
  resetPassword,
  changePassword,
  loginUser,
  getProfile,
  logoutUser,
  refreshAccessToken,
};