const connection = require("../config/database");

function addParkingLotController(req, res) {
  const { email, bookingId, transactionId } = req.body;

  const query = `SELECT * FROM bookings WHERE booking_id = ${bookingId} AND transaction_id = ${transactionId}`;

  //   res.send(query);

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error" + err,
      });
    } else {
      if (result.length > 0) {
        const query2 = `UPDATE bookings SET status = '1' WHERE booking_id = ${bookingId} AND transaction_id = ${transactionId}`;

        connection.query(query2, (err, result) => {
          if (err) {
            res.status(500).json({
              message: "Internal Server Error" + err,
            });
          } else {
            res.status(200).json({
              message: "Booking Confirmed",
            });
          }
        });
      } else {
        res.status(404).json({
          message: "Booking Not Found",
        });
      }
    }
  });
}

module.exports = addParkingLotController;
