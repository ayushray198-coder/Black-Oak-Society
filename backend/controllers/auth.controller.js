import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import OTP from "../models/otp.model.js";
import generateOtp from "../utils/generateOtp.js";
import sendEmail from "../utils/sendEmail.js";

const sendOtp = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber } = req.body;

    // Check Required Fields
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All required fields are mandatory.",
      });
    }

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists.",
      });
    }

    // Generate OTP
    const otp = generateOtp();

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Delete Previous OTP
    await OTP.deleteMany({ email });

    // Save OTP
    await OTP.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 Minutes
    });

    // Send Email
 console.log("Sending OTP to:", email);

await sendEmail(email, otp);

console.log("OTP Sent Successfully");
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { sendOtp };