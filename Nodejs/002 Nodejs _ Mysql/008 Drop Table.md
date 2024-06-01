#  Drop Table

> to drop tabe we can use **"DROP TABLE tableName"**  statement

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
    const statement  = "DROP TABLE posts";
    connection.query(statement,(err,result)=>{
        if(err) return console.log(err);
        console.log("Number of records deleted : " + result.affectedRows);
    })
});

```





### Drop Only if Exist

> If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the **IF EXISTS keyword to avoid getting an error.

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
    const statement  = "DROP TABLE IF EXISTS tabel";
    connection.query(statement,(err,result)=>{
        if(err) return console.log(err);
        console.log(result);
    })
});
```

