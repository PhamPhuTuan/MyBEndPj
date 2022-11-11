const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8080,
  user: "root",
  password: "",
  database: "TuanDB",
});
connection.connect((err) => {
  if (err) {
    console.log("fail!");
    console.log(err);
  } else {
    console.log("Success!");
    connection.query("SELECT * FROM `users` ", function (err, results, fields) {
      console.log(err);
    });
  }
});