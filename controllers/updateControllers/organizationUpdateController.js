const connection = require("../../config/database");

function updateUser(req, res) {
  const {
    firstName,
    lastName,
    email,
    phone,
    organizationName,
    organizationAddress,
    oldData,
  } = req.body;

  res.setHeader("Content-Type", "application/json");

  const updateQuery = `UPDATE organizations SET firstName = ?, lastName = ?, phone = ?, organizationName = ?, organizationAddress = ? WHERE email = ?`;

  connection.query(
    updateQuery,
    [firstName, lastName, phone, organizationName, organizationAddress, email],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json("Server error" + err);
      } else {
        oldData.firstName = firstName;
        oldData.lastName = lastName;
        oldData.phone = phone;
        oldData.organizationName = organizationName;
        oldData.organizationAddress = organizationAddress;
        res.status(200).json({
          message: "User updated successfully",
          newData: oldData,
        });
      }
    }
  );
}

module.exports = updateUser;
