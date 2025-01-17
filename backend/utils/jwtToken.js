export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  
  const options = {
    maxAge: process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000, // Use maxAge instead of expires
    httpOnly: true, // Ensures the cookie is not accessible via JavaScript
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
