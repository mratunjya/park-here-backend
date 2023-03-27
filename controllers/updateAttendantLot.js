const connection = require("../config/database");

function updateAttendantLot(req, res) {
  const { email, parkingLotId } = req.body;

  const query = `UPDATE attendants SET parkingLotID = '${parkingLotId}' WHERE email = '${email}'`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Internal server error" + err);
    } else {
      res.status(200).send("Updated successfully");
    }
  });
}

module.exports = updateAttendantLot;
