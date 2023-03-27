const connection = require("../../config/database");

function bookedController(req, res) {
  const { parkingLotID } = req.body;

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

  const query = `SELECT b.timestamp, b.booking_id, u.firstName, u.lastName, u.phone, p.name, p.address, p.city, p.state, p.booked, p.total_capacity
  FROM bookings b
  JOIN users u ON b.email = u.email
  JOIN parking_lots p ON b.parkinglot_id = p.id
  WHERE b.parkinglot_id = ${parkingLotID} AND b.status = 0 AND b.time_stamp BETWEEN '${startDateTime}' AND '${endDateTime}'
  ORDER BY b.time_stamp DESC;
  `;

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal server error" + err);
    } else {
      if (result.length > 0) {
        res.status(200).send(result);
      } else {
        const query2 = `SELECT name, address, city, state, booked, total_capacity FROM parking_lots WHERE id = ${parkingLotID}`;

        connection.query(query2, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send("Internal server error" + err);
          } else {
            res.status(200).send(result);
          }
        });
      }
    }
  });
}

module.exports = bookedController;
