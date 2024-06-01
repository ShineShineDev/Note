const mysql = require('mysql'); //Import "mysql" module

const connection = mysql.creatConnection({
  host: "localhost",
  user: "root",
  password: ""
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connected!");
})
