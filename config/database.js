const mysql = require("mysql");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db" + err);
    return;
  }
  console.log("Connection established");
});

module.exports = connection;
