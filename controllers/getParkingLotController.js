const connection = require("../config/database");

function getParkingLotController(req, res) {
  const { id } = req.body;

  const query = `SELECT * FROM parking_lots WHERE id = '${id}'`;

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

module.exports = getParkingLotController;
