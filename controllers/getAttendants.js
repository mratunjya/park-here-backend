const connection = require("../config/database");

function getAttendants(req, res) {
  const { email } = req.body;

  const query1 = `SELECT id, name FROM parking_lots WHERE email = '${email}'`;

  connection.query(query1, (err, result) => {
    if (err) {
      res.status(500).send("Internal server error" + err);
    } else {
      const attendants = [];

      const promises = result.map((element) => {
        const query2 = `SELECT firstName, lastName, email, phone, parkingLotID FROM attendants WHERE parkingLotID = '${element.id}'`;

        return new Promise((resolve, reject) => {
          connection.query(query2, (err, result) => {
            if (err) {
              reject(err);
            } else {
              const attendantsWithParkingLotName = result.map((attendant) => ({
                ...attendant,
                parkingLotName: element.name,
              }));
              resolve(attendantsWithParkingLotName);
            }
          });
        });
      });

      Promise.all(promises)
        .then((results) => {
          results.forEach((result) => {
            attendants.push(...result);
          });
          res.status(200).send(attendants);
        })
        .catch((err) => {
          res.status(500).send("Internal server error" + err);
        });
    }
  });
}

module.exports = getAttendants;
