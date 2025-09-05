export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // deleting the password keyword form user
  const userDoc = user.toObject();
  const { password, ...userWithoutPass } = userDoc;

  res
    .status(statusCode)
    .cookie(process.env.COOKIE_NAME, token, {
      maxAge: parseInt(process.env.COOKIE_EXPIRE),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      token,
      user: userWithoutPass,
    });
};
