const express = require("express");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(helmet());

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

app.post("/", (req, res) => {
  res.send("Hello World");
});

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
