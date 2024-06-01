const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : ''
});
connection.connect((err)=>{
   if (err) throw err;
   console.log("DB Connected!");
   const statement = "CREATE DATABASE nodedb";
   connection.query(statement,(err,result)=>{
       if (err) return console.log(err.message);
       console.log("Database created");
   })
})

