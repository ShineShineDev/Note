const mysql = require('mysql');
dbEnv = {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'nodedb'
}
const connection = mysql.createConnection(dbEnv);

connection.connect((err)=>{
    if(err) return console.log(err.message);
    const statement  = "UPDATE posts SET title = 'update tabe' WHERE id = '27'";
    connection.query(statement,(err,result)=>{
        if(err) return console.log(err.message);
        console.log('update');
    })
});