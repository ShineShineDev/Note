# Limit the Result

> You can limit the number of records returned from the query, by using the **"SELECT  FROM posts LIMIT 5" **statement

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
    const statement  = "SELECT * FROM posts LIMIT 5";
    connection.query(statement,(err,result)=>{
        if(err) return console.log(err.message);
        console.log(result);
    })
});

// result
[
  RowDataPacket { id: 23, title: 'Post two', text: 'testing post' },
  RowDataPacket { id: 24, title: 'Post two', text: 'testing post' },
  RowDataPacket { id: 25, title: 'Post two', text: 'testing post' },
  RowDataPacket { id: 26, title: 'NPost two', text: 'testing post' },
  RowDataPacket { id: 27, title: 'update tabe', text: 'testing post' }
]

```



### OFFSET

> If you want to return five records, starting from the specifie record, you can use the **"SELECT * FROM posts LIMIT 5 OFFSET 5"** statement

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
    const statement  = "SELECT * FROM posts LIMIT 5 OFFSET 5";
    // short syntax
    //const statement  = "SELECT * FROM posts LIMIT 5,5";
    connection.query(statement,(err,result)=>{
        if(err) return console.log(err.message);
        console.log(result);
    })
});
// result
[
  RowDataPacket { id: 28, title: 'Post two', text: 'testing post' },
  RowDataPacket { id: 30, title: 'Post one', text: 'testing post' },
  RowDataPacket { id: 31, title: 'SPost two', text: 'testing post' },
  RowDataPacket { id: 32, title: 'Post two', text: 'testing post' },
  RowDataPacket { id: 33, title: 'Post two', text: 'testing post' }
]
```

>  "OFFSET 5", means starting from the six position, not the five!