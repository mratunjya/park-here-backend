const connection = require("../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function user(req, res) {
  const { token } = req.body;

  res.setHeader("Content-Type", "application/json");
  res.send(req.user);
}

module.exports = user;
