# Update Table

> You can update existing records in a table by using the "UPDATE" statement

```js
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
```



> **Notice the WHERE clause in the UPDATE syntax:** The WHERE clause specifies which record or records that should be updated. If you omit the WHERE clause, all records will be updated!

