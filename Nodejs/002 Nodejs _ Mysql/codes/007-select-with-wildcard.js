const mysql = require('mysql');

const connection = mysql.createConnection({
     host : 'localhost',
     user : 'root',
     password : '',
     database : 'nodedb'
}) ;

connection.connect(function(err) {
  if (err) console.log(err.message);
  connection.query("SELECT * FROM posts WHERE title LIKE 'S%'", function (err, result) {
    if (err) console.log(err.message);
    console.log(result);
  });
});
