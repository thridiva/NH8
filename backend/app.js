const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helment = require("helmet");
const mongoseSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const createError = require("./utils/createError");
const { errorHandler } = require("./controllers/errController");

const userRouter = require("./routes/userRoutes");
const smsRouter = require("./routes/smsRoutes");
const itemRouter = require("./routes/itemRoutes");

const app = express();
app.use(helment());

//middleware
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message:
    "Invalid Activity Detected Or Too Many Requests From this IP, Try Again in an Hour!",
});

app.use("/api", limiter);
app.use(cors());

app.use(express.json()); // to handle data from req
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(mongoseSanitize());
app.use(xss()); // html malicious prevention

app.use((req, res, next) => {
  req.timeNow = new Date().toISOString();
  next();
});

// -----------------------------------------

app.use("/api/v1/users", userRouter);
app.use("/api/v1/sms", smsRouter);
app.use("/api/v1/items", itemRouter);

// Handle requests to unrecognized API endpoints
app.all("*", (req, res, next) => {
  next(createError(`Cant Find path ${req.originalUrl} on the server`));
});

app.use(errorHandler); // Error Handler

module.exports = app;
