const connection = require("../../config/database");

function addParkingLotController(req, res) {
  const { email, name, address, city, state, capacity, price } = req.body;

  const parkingLotId = Math.floor(100000000 + Math.random() * 900000000);

  const query = `INSERT INTO parking_lots (id, email, name, address, city, state, total_capacity, price) VALUES ('${parkingLotId}', '${email}', '${name}', '${address}', '${city}', '${state}', '${capacity}', ${price})`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json("Something went wrong" + err);
    } else {
      res.status(200).json({
        message: "Parking Lot Added",
      });
    }
  });
}

module.exports = addParkingLotController;
