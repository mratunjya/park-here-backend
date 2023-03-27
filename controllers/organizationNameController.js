const connection = require("../config/database");

function organizationNameController(req, res) {
  const query = `SELECT organizationName FROM organizations`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json("Internal Server Error" + err);
    } else {
      res.status(200).json({
        message: "Organization Names Retrieved",
        organizationNames: result,
      });
    }
  });
}

module.exports = organizationNameController;
