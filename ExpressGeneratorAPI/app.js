const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const registerUser = require("./routes/registerUsers");
const loginRoutes = require("./routes/loginUser");
// eslint-disable-next-line import/extensions
const connectionFile = require("./connectionDB/connection.js");


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

connectionFile.connections
  .then(() => {
    console.log("connection successful..!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/home", indexRouter);
app.use("/", registerUser);
app.use("/registeruser", registerUser);
app.use("/registeruser", registerUser);
app.use("/updateUser", registerUser);
app.use("/deleteUser", registerUser);
app.use("/getLoginUser",loginRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
