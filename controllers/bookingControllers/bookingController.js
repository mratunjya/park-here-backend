const connection = require("../../config/database");

function bookingController(req, res) {
  const { email, parkingLotId, timeStamp } = req.body;

  const query = `SELECT booked, total_capacity FROM parking_lots WHERE id = ${parkingLotId}`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      const { booked, total_capacity } = result[0];
      if (booked < total_capacity) {
        const bookingId = Math.floor(Math.random() * 100000000000);
        const transactionId = Math.floor(Math.random() * 100000000000000);

        const query1 = `UPDATE parking_lots SET booked = ${
          booked + 1
        } WHERE id = ${parkingLotId}`;

        const query2 = `INSERT INTO bookings (booking_id, email, transaction_id, parkinglot_id, timestamp) VALUES (${bookingId}, '${email}', ${transactionId}, ${parkingLotId}, '${timeStamp}')`;

        connection.query(query1, (err, result) => {
          if (err) {
            res.status(500).send("Internal Server Error");
          } else {
            connection.query(query2, (err, result) => {
              if (err) {
                res.status(500).send("Internal Server Error");
              } else {
                res.status(200).send("Booking Successful");
              }
            });
          }
        });
      } else {
        res.status(400).send("Parking lot is full");
      }
    }
  });
}

module.exports = bookingController;
