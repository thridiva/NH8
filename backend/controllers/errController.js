const createError = require("./../utils/createError");
const cloneDeep = require("clone-deep");

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    // Operational Error

    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Programming Error

    console.error("Error ⭕", err);

    res.status(500).json({
      status: "error",
      message: "Something went wrong 🙁🙁",
    });
  }
};

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}:${err.value}`;

  return createError(message, 400);
};

const handleDuplicateValueDB = (err) => {
  const keyPatternField = err.errorResponse.keyPattern;
  const keyPatternFields = Object.keys(keyPatternField);
  const duplicateFields = keyPatternFields
    .map((field) => `${field}`)
    .join(", ");

  let message = `Duplicate value, The following field(s) are already taken: ${duplicateFields}`;

  return createError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  console.log(err.name);
  const message = `Invalid input Data. ${errors.join(". ")}`;
  return createError(message, 403);
};

const handleJsonWebTokenError = () => {
  message = "Please login to get access";
  return createError(message, 401);
};

const handleTokenExpiredError = () =>
  createError("Session Expired! Please Try To Login Again!!", 401);

exports.errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV == "development") {
    sendErrorDev(err, res);
  } else {
    let error = cloneDeep(err);

    if (err.name === "CastError") error = handleCastErrorDB(error);
    if (err.code === 11000) error = handleDuplicateValueDB(error);
    if (err.name === "ValidationError") error = handleValidationErrorDB(error);
    if (err.name === "JsonWebTokenError") error = handleJsonWebTokenError();
    if (err.name === "TokenExpiredError") error = handleTokenExpiredError();

    sendErrorProd(error, res);
  }
};
