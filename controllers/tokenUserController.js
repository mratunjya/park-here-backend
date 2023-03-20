function user(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(req.user);
}

module.exports = user;
