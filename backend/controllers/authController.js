const handleAsyncFunc = require("./../utils/handleAsyncFunc");
const createError = require("./../utils/createError");
const { promisify } = require("util");

const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signUpFunc = async (req, res, next) => {
  const newUser = await User.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    phoneNumber: req.body.phoneNumber,
    lastPasswordChange: req.body.lastPasswordChange,
  });

  const token = createToken(newUser._id);
  const { password, confirmPassword, ...userData } = newUser._doc;

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: userData,
    },
  });
};

const loginFunc = async (req, res, next) => {
  const { emailOrPhoneNumber, password, whichOne } = req.body;

  if (!emailOrPhoneNumber || !password) {
    return next(
      createError("Please provide email/phone number and password!", 400)
    );
  }

  const searchFor = { [whichOne]: emailOrPhoneNumber };

  const user = await User.findOne(searchFor).select("+password");

  if (!user || !(await user.isPasswordCorrect(password, user.password))) {
    return next(createError("Incorrect Email Or Password", 401));
  }

  const token = createToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
};

const protectFunc = async (req, res, next) => {
  let token;

  // Get Token from headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return next(
      createError("You are not logged in! Please login to get access", 401)
    );

  // Verify Token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check User exists or not
  const loggingUser = await User.findById(decoded.id);

  if (!loggingUser) return next(createError("User no longer exits", 401));

  // Check if user changed password in middle
  const result = loggingUser.isPasswordChanged(decoded.iat); // iat -> issued at

  if (result)
    return next(
      createError(
        "User recently changed the password, Please login again!!",
        401
      )
    );

  req.user = loggingUser;

  next();
};

// TODO Forget Password
// TODO Reset Password

const admin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(createError("Only Admins Can access this route", 401));
  }

  next();
};

exports.admin = (req, res, next) => handleAsyncFunc(admin, req, res, next);

exports.protect = (req, res, next) =>
  handleAsyncFunc(protectFunc, req, res, next);

exports.login = (req, res, next) => handleAsyncFunc(loginFunc, req, res, next);

exports.signUp = (req, res, next) =>
  handleAsyncFunc(signUpFunc, req, res, next);
