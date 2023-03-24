const connection = require("../config/database");

function editParkingLotController(req, res) {
  const { id, name, address, city, state, capacity } = req.body;

  const query = `UPDATE parking_lots SET name = '${name}', address = '${address}', city = '${city}', state = '${state}', total_capacity = '${capacity}' WHERE id = '${id}'`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error" + err,
      });
    } else {
      res.status(200).json({
        message: "Parking Lot Updated",
      });
    }
  });
}

module.exports = editParkingLotController;
