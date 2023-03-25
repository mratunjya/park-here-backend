const connection = require("../../config/database");

function getBookingsController(req, res) {
  const { email } = req.body;

  // Join the bookings table with the parking_lots table on parking_lots
  const query = `SELECT bookings.booking_id, bookings.transaction_id, bookings.parkinglot_id, bookings.timestamp, bookings.price, parking_lots.name, parking_lots.address, parking_lots.state, parking_lots.city 
  FROM bookings
  INNER JOIN parking_lots ON bookings.parkinglot_id = parking_lots.id
  WHERE bookings.email = ?
  ORDER BY bookings.timestamp DESC;
  `;

  connection.query(query, [email], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Something went wrong" + err });
    } else {
      res.status(200).json(result);
    }
  });
}

module.exports = getBookingsController;
