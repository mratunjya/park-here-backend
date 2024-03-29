const connection = require("../../config/database");
const bcrypt = require("bcryptjs");

function signUp(req, res) {
  const { firstName, lastName, email, phone, password, parkingLotID } =
    req.body;

  res.setHeader("Content-Type", "application/json");

  const query = `SELECT * FROM parking_lots WHERE id = '${parkingLotID}'`;

  connection.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json("Internal Server Error" + err);
    } else {
      if (result.length > 0) {
        const selectQuery = `SELECT * FROM attendants WHERE email = '${email}'`;

        connection.query(selectQuery, (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).json("Internal Server Error" + err);
          } else {
            if (result.length > 0) {
              // User already exists in the database
              res.status(409).json("Email already exists");
            } else {
              // User does not exist in the database, so hash the password and insert new user
              bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                  console.error(err);
                  res.status(500).json("Internal Server Error" + err);
                } else {
                  bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                      console.error(err);
                      res.status(500).json("Internal Server Error" + err);
                    } else {
                      const insertQuery = `INSERT INTO attendants (firstName, lastName, email, phone, password, parkingLotID) VALUES ('${firstName}', '${lastName}', '${email}', '${phone}', '${hash}', '${parkingLotID}')`;
                      connection.query(insertQuery, (err, result) => {
                        if (err) {
                          console.error(err);
                          res.status(500).json("Internal Server Error" + err);
                        } else {
                          res
                            .status(200)
                            .json({ message: "Attendant added successfully" });
                        }
                      });
                    }
                  });
                }
              });
            }
          }
        });
      } else {
        res.status(500).json({ message: "Parking lot does not exist" });
      }
    }
  });
}

module.exports = signUp;
