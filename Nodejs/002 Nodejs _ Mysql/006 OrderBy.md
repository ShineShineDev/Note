### Sort  Ascending 

- `To sort result in ascending or descending order use "Use the "SELECT  FROM customers ORDER BY colname"`

- `The ORDER BY keyword sorts the result ascending by default`

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
      const statement = "SELECT * FROM posts ORDER BY title";
      connection.query(statement,(err,result)=>{
          if(err) return console.log(err);
          console.log('Sort alphabetically : ascending');
          console.log(result);
      })
  });
  
  // result
  [
    RowDataPacket { id: 26, title: 'NPost two', text: 'testing post' },
    RowDataPacket { id: 30, title: 'Post one', text: 'testing post' },
    RowDataPacket { id: 29, title: 'Post one', text: 'testing post' },
    RowDataPacket { id: 34, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 33, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 32, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 23, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 28, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 27, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 25, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 24, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 36, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 31, title: 'SPost two', text: 'testing post' },
    RowDataPacket { id: 35, title: 'SPost two', text: 'testing post' }
  ]
  ```

  



### Sort Descending

- `Use the DESC keyword to sort the result in a descending order.`

- `SELECT * FROM posts ORDER BY id DESC`

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
      const statement = "SELECT * FROM posts ORDER BY id DESC";
      connection.query(statement,(err,result)=>{
          if(err) return console.log(err);
          console.log(result);
      })
  });
  
  // result
  [
    RowDataPacket { id: 36, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 35, title: 'SPost two', text: 'testing post' },
    RowDataPacket { id: 34, title: 'Post two', text: 'testing post' },
    RowDataPacket { id: 33, title: 'Post two', text: 'testing post' },
  ]
  
  ```

  

