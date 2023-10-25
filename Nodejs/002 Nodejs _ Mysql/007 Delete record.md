# Delete Record

- **`DELETE FROM statement` ** use to delete records from an existing table

- **If you omit the WHERE clause, all records will be deleted!**

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
      const statement  = "DELETE FROM posts WHERE id = '29' ";
      connection.query(statement,(err,result)=>{
          if(err) return console.log(err);
          console.log("Number of records deleted : " + result.affectedRows);
      })
  });
  
  // Deleted id : 1
  ```

  

