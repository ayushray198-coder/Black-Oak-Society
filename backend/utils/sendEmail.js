import dotenv from "dotenv";
import nodemailer from "nodemailer";


dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (email, otp) => {
  await transporter.sendMail({
    from: `"Black Oak Society 🥃" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify Your Email | Black Oak Society",
    html: `
      <div style="max-width:600px;margin:40px auto;padding:40px;background:#111827;border:1px solid #D4AF37;border-radius:12px;font-family:Arial,sans-serif;color:#fff;">

        <h1 style="text-align:center;color:#D4AF37;">
          Black Oak Society 🥃
        </h1>

        <p>Hello,</p>

        <p>Thank you for signing up.</p>

        <p>Please use the OTP below to verify your email address.</p>

        <div style="text-align:center;margin:30px 0;">
          <span style="font-size:36px;font-weight:bold;letter-spacing:8px;color:#D4AF37;">
            ${otp}
          </span>
        </div>

        <p>This OTP will expire in <b>5 minutes</b>.</p>

        <hr style="border:none;border-top:1px solid #333;margin:30px 0;" />

        <p style="text-align:center;color:#888;font-size:13px;">
          Crafted for the Extraordinary 🥃
        </p>

      </div>
    `,
  });
};

export default sendEmail;