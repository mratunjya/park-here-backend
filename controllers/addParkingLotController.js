const connection = require("../config/database");

function addParkingLotController(req, res) {
  const { email, name, address, city, state, capacity } = req.body;

  const parkingLotId = Math.floor(100000000 + Math.random() * 900000000);

  const query = `INSERT INTO parking_lots (id, email, name, address, city, state, total_capacity) VALUES ('${parkingLotId}', '${email}', '${name}', '${address}', '${city}', '${state}', '${capacity}')`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error" + err,
      });
    } else {
      res.status(200).json({
        message: "Parking Lot Added",
      });
    }
  });
}

module.exports = addParkingLotController;
