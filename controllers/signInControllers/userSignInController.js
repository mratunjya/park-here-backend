const connection = require("../../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function userSignIn(req, res) {
  const { email, password } = req.body;

  res.setHeader("Content-Type", "application/json");

  const query = `SELECT * FROM users WHERE email = '${email}'`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json("Internal Server Error" + err);
    } else {
      if (result.length > 0) {
        const user = result[0];
        const { JWT_SECRET } = process.env;

        // Compare the hashed password stored in the database with the hashed password generated from user input
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            res.status(500).json("Internal Server Error" + err);
          } else if (isMatch) {
            const token = jwt.sign(
              {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
              },
              JWT_SECRET,
              { expiresIn: "365d" }
            );

            res.status(200).json({
              message: "Login Successful",
              user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
              },
              token: token,
            });
          } else {
            res.status(200).json({
              message: "Invalid Credentials",
            });
          }
        });
      } else {
        res.status(401).json("Invalid Credentials");
      }
    }
  });
}

module.exports = userSignIn;
