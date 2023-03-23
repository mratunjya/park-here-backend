const mysql = require("mysql");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  post: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db" + err);
    return;
  }
  console.log("Connection established");
});

module.exports = connection;
