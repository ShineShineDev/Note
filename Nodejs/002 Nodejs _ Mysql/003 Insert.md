 # Insert

- `To fill a table in MySQL, use the "INSERT INTO posts(title, text) VALUES ('title', 'text')" statement.`

- `When executing a query, a result object is returned`

  ```js
  const mysql2 = require('mysql2'); // require mysql module
  
  //create DB Connection
  const con = mysql2.createConnection({
      host : 'localhost',
      user : 'root',
      password : 'password',
      database: "nodedb"
  })
  //DB Connection fail or success
  con.connect((err)=>err ? console.log(err.message) : console.log('Database server is running'))
  
  const title = 'Post One' 
  const text = 'this is post one';
  
  // nodedb Database->posts table
  //     table : id INT AUTO_INCREMENT PRIMARY KEY
  //     title VARCHAR(255)
  //     text VARCHAR(255))
  
  // sql statement
  const statement = `INSERT INTO posts(title, text) VALUES ('${title}','${text}')`;  
  con.query(statement,(err,result)=>{
      if(err)
          console.log(err)
      else
          console.log(result)  
          con.end(); //close db connection 
  })
  ```

  





## Insert Multiple row 

- `To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be replaced by the value array`

- `INSERT INTO posts(title, text) VALUES ?`

  ```js
  var mysql = require('mysql');
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO posts (title, text) VALUES ?";
    var values = [
      ['Post One', 'Post one text'],
      ['Post Two', 'Post Two text'],
      ['Post Three', 'Post Three text'],
      ['Post Four', 'Post Four text'],
      ['Post Five', 'Post Five text'],
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });
  ```

  





### The Result Object

- `When executing a query, a result object is returned.`

  ```js
  {
   fieldCount: 0,
   affectedRows: 14,
   insertId: 0,
   serverStatus: 2,
   warningCount: 0,
   message: '\'Records:14 Duplicated: 0 Warnings: 0',
   protocol41: true,
   changedRows: 0
  }
  ```

  

