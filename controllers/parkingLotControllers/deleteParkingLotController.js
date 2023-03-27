const connection = require("../../config/database");

function deleteParkingLotController(req, res) {
  const { id } = req.body;

  const query = `DELETE FROM parking_lots WHERE id = '${id}'`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json("Something went wrong" + err);
    } else {
      res.status(200).json({
        message: "Parking Lot Deleted",
      });
    }
  });
}

module.exports = deleteParkingLotController;
