const connection = require("../../config/database");

function updateUser(req, res) {
  const { firstName, lastName, email, phone, oldData } = req.body;

  res.setHeader("Content-Type", "application/json");

  const updateQuery = `UPDATE users SET firstName = ?, lastName = ?, phone = ? WHERE email = ?`;

  connection.query(
    updateQuery,
    [firstName, lastName, phone, email],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json("Internal Server Error" + err);
      } else {
        oldData.firstName = firstName;
        oldData.lastName = lastName;
        oldData.phone = phone;
        res.status(200).json({
          message: "User updated successfully",
          newData: oldData,
        });
      }
    }
  );
}

module.exports = updateUser;
