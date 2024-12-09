import { User } from "../models/userSchema.js";
import ErrorHandler from "../error/error.js";

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and password!", 400));
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid email or password!", 401));
    }

    // Check if the password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next(new ErrorHandler("Invalid email or password!", 401));
    }

    // Generate token
    const token = user.generateToken();

    // Send response
    res.status(200).json({
      success: true,
      token,
      user: { email: user.email, name: user.name },
      message: "Login successful!",
    });
  } catch (error) {
    next(error);
  }
};
