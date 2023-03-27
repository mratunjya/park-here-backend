const connection = require("../config/database");

function deleteAttendantController(req, res) {
  const { email, password, attendantEmail } = req.body;

  const query1 = `SELECT * FROM organizations WHERE email = '${email}' AND password = '${password}'`;

  connection.query(query1, (err, result) => {
    if (err) {
      res.status(500).send("Internal server error" + err);
    } else {
      if (result.length > 0) {
        const query2 = `DELETE FROM attendants WHERE email = '${attendantEmail}'`;

        connection.query(query2, (err, result) => {
          if (err) {
            res.status(500).send("Internal server error" + err);
          } else {
            res.status(200).send("Attendant deleted successfully");
          }
        });
      } else {
        res.status(401).send("Unauthorized");
      }
    }
  });
}

module.exports = deleteAttendantController;
