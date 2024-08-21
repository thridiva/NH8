function createError(message, statusCode) {
  // console.log("Came here");
  const error = new Error(message);
  error.statusCode = statusCode;
  error.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  error.isOperational = true;
  Error.captureStackTrace(error, createError);
  return error;
}

module.exports = createError;

/*
Error.captureStackTrace(error, createAppError): This line captures the stack trace at the point
where the function createAppError is called, but it excludes the createAppError function itself from the stack trace.
This is useful for keeping the stack trace clean and focused on where the error originated, rather than including the
error creation function itself.
*/
