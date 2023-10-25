const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: "nodedb"
});
connection.connect((err)=>{
   if (err) return console.log(err.message);;
   console.log("DB Connected!");
   const statement = "CREATE TABLE posts (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), text VARCHAR(255))";
    connection.query(statement,(err,result)=>{
        if (err) return console.log(err.message);;
        console.log("Post Table created");
    });
})