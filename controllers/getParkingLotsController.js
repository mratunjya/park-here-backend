const connection = require("../config/database");

function getParkingLotsController(req, res) {
  const { email } = req.body;

  const query = `SELECT * FROM parking_lots WHERE email = '${email}'`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error" + err,
      });
    } else {
      res.status(200).json(result);
    }
  });
}

module.exports = getParkingLotsController;
