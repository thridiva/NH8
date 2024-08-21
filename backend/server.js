const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT REJECTION ⭕ Shutting Down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const mongoose = require("mongoose");

const app = require("./app");

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db).then(() => {
  console.log("MonogoDB Connected");
});

const port = process.env.PORT || 5000;

const server = app.listen(port, "127.0.0.1", () => {
  console.log(port);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION ⭕ Shutting Down...");
  server.close(() => {
    process.exit(1);
  });
});
