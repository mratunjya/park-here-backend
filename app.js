const createError = require("http-errors");
const bodyParser = require("body-parser");
const auth = require("./middleware/auth");
const express = require("express");
const helmet = require("helmet");
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

const whiteList = ["http://localhost:3000", "https://park-here.vercel.app"];

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

const organizationRouter = require("./routes/organizationRouter");

const updateRouter = require("./routes/updateRouter");

const parkingLotRouter = require("./routes/parkingLotRouter");

const bookingRouter = require("./routes/bookingRouter");

app.use("/api/sign-in", signInRouter);
app.use("/api/sign-up", signUpRouter);

app.use("/api/user", auth, userRouter);
app.use("/api/organization", organizationRouter);

app.use("/api/update", auth, updateRouter);

app.use("/api/bookings", auth, bookingRouter);

app.use("/api/parking-lots", parkingLotRouter);


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
