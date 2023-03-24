const connection = require("../config/database");

function getAllParkingLotsController(req, res) {
  const query = `SELECT * FROM parking_lots`;

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

module.exports = getAllParkingLotsController;
