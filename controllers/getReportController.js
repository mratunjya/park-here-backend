const connection = require("../config/database");

getReportController = async (req, res) => {
  const { email } = req.body;

  try {
    const query1 = `SELECT id FROM parking_lots WHERE email = '${email}'`;

    const result1 = await new Promise((resolve, reject) => {
      connection.query(query1, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    let data = [];

    for (const element of result1) {
      const query2 = `SELECT * FROM bookings WHERE parkinglot_id = '${element.id}'`;

      const result2 = await new Promise((resolve, reject) => {
        connection.query(query2, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });

      result2.length > 0 && data.push(result2);
    }

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error" + err);
  }
};

module.exports = getReportController;
