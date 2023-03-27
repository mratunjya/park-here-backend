const connection = require("../../config/database");

function getAllParkingLotsController(req, res) {
  const query = `SELECT * FROM parking_lots`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json("Something went wrong" + err);
    } else {
      const promises = [];
      for (let i = 0; i < result.length; i++) {
        const date = new Date();
        const year = date.getFullYear();
        const month =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        const startHour = "00";
        const startMinute = "00";
        const startSecond = "00";
        const endHour = "23";
        const endMinute = "59";
        const endSecond = "59";
        const startDateTime = `${year}-${month}-${day} ${startHour}:${startMinute}:${startSecond}`;
        const endDateTime = `${year}-${month}-${day} ${endHour}:${endMinute}:${endSecond}`;
        const query2 = `SELECT * FROM bookings WHERE parkinglot_id = '${result[i].id}' AND time_stamp BETWEEN '${startDateTime}' AND '${endDateTime}'`;
        const promise = new Promise((resolve, reject) => {
          connection.query(query2, (err, result2) => {
            if (err) {
              reject(err);
            } else {
              result[i].booked = result2.length;
              resolve();
            }
          });
        });
        promises.push(promise);
      }

      Promise.all(promises)
        .then(() => {
          result.filter((parkingLot) => {
            if (parkingLot.booked < parkingLot.total_capacity)
              return parkingLot;
          });
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json("Internal Server Error" + err);
        });
    }
  });
}

module.exports = getAllParkingLotsController;
