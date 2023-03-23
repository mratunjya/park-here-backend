const connection = require("../../config/database");
const bcrypt = require("bcryptjs");

function adminSignUp(req, res) {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    organizationName,
  } = req.body;

  res.setHeader("Content-Type", "application/json");

  const selectQuery = `SELECT * FROM admins WHERE email = '${email}'`;

  connection.query(selectQuery, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    } else {
      if (result.length > 0) {
        // User already exists in the database
        res.status(200).json({ message: "Email already exists" });
      } else {
        // User does not exist in the database, so hash the password and insert new user
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: "Server error" });
          } else {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) {
                console.error(err);
                res.status(500).json({ message: "Server error" });
              } else {
                const insertQuery = `INSERT INTO admins (firstName, lastName, email, phone, password, organizationName) VALUES ('${firstName}', '${lastName}', '${email}', '${phone}', '${hash}', '${organizationName}')`;
                connection.query(insertQuery, (err, result) => {
                  if (err) {
                    console.error(err);
                    res.status(500).json({ message: "Server error" });
                  } else {
                    res
                      .status(200)
                      .json({ message: "User added successfully" });
                  }
                });
              }
            });
          }
        });
      }
    }
  });
}

module.exports = adminSignUp;
