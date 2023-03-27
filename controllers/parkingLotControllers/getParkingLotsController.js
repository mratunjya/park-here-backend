const connection = require("../../config/database");

function getParkingLotsController(req, res) {
  const { email } = req.body;

  const query1 = `SELECT * FROM parking_lots WHERE email = '${email}'`;

  connection.query(query1, (err, result1) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error" + err,
      });
    } else {
      const date = new Date();
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = (date.getDate() - 1).toString().padStart(2, "0");
      const startHour = "00";
      const startMinute = "00";
      const startSecond = "00";
      const endHour = "23";
      const endMinute = "59";
      const endSecond = "59";
      const startDateTime = `${year}-${month}-${day} ${startHour}:${startMinute}:${startSecond}`;
      const endDateTime = `${year}-${month}-${day} ${endHour}:${endMinute}:${endSecond}`;

      // Use Promise.all to wait for all queries to complete
      Promise.all(
        result1.map((parkingLot) => {
          return new Promise((resolve, reject) => {
            const query2 = `SELECT COUNT(*) AS booked FROM bookings WHERE parkinglot_id = '${parkingLot.id}' AND time_stamp BETWEEN '${startDateTime}' AND '${endDateTime}'`;

            connection.query(query2, (err, result2) => {
              if (err) {
                reject(err);
              } else {
                parkingLot.booked = result2[0].booked;
                resolve();
              }
            });
          });
        })
      )
        .then(() => {
          res.status(200).json(result1);
        })
        .catch((err) => {
          res.status(500).json({
            message: "Internal Server Error" + err,
          });
        });
    }
  });
}

module.exports = getParkingLotsController;
