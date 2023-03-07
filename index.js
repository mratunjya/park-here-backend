const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();

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

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = http.createServer(app);

const port = process.env.PORT || 6000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
