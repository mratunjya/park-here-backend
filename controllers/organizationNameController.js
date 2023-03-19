const connection = require("../config/database");

function organizationNameController(req, res) {
  const query = `SELECT organizationName FROM users`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error" + err,
      });
    } else {
      const filteredResult = result.filter(
        (item) =>
          item.organizationName !== null &&
          item.organizationName !== undefined &&
          item.organizationName !== "" &&
          item.organizationName !== "null"
      );

      res.status(200).json({
        message: "Organization Names Retrieved",
        organizationNames: filteredResult,
      });
    }
  });
}

module.exports = organizationNameController;
