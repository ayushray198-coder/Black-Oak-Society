import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    }
  );
};

export { generateAccessToken, generateRefreshToken };