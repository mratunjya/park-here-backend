const connection = require("../config/database");

function bookedController(req, res) {
  const { parkingLotID } = req.body;

  const query = `SELECT b.timestamp, b.booking_id, u.firstName, u.lastName, u.phone, p.name, p.address, p.city, p.state, p.booked, p.total_capacity
  FROM bookings b
  JOIN users u ON b.email = u.email
  JOIN parking_lots p ON b.parkinglot_id = p.id
  WHERE b.parkinglot_id = ${parkingLotID}
  ORDER BY b.time_stamp DESC
  `;

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal server error" + err);
    } else {
      res.status(200).send(result);
    }
  });
}

module.exports = bookedController;
