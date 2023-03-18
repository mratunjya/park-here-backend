const createError = require("http-errors");
const bodyParser = require("body-parser");
const auth = require("./middleware/auth");
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const whiteList = ["http://localhost:3000"];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whiteList.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

// Routes
const signInRouter = require("./routes/signInRouter");
const signUpRouter = require("./routes/signUpRouter");
const userRouter = require("./routes/userRouter");

app.use("/api/signin", signInRouter);
app.use("/api/signup", signUpRouter);
app.use("/api/user", auth, userRouter);

app.post("/", auth, (req, res) => {
  res.status(200).send("Authenticated");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Handling Errors
app.use((err, req, res, next) => {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

module.exports = app;
