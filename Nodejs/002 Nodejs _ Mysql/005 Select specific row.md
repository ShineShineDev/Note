### Select specifie row

- `To select specifie row you can filter the selection by using the "SELECT  FROM posts WHERE id= 1 statement"`

  ```js
  const mysql = require('mysql2');
  
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "nodedb"
  });
  
  con.connect(function(err) {
     if (err) return console.log(err.message);
     const statement = "SELECT * FROM posts WHERE id =1";
     con.query(statement, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      con.end();
    });
  })
  ```
  
  





### Wildcard Characters

- `You can also select the records that starts, includes, or ends with a given letter or phrase.`

- `Use the '%' wildcard to represent zero, one or multiple characters:`

  ```js
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
  ```
  
  





### Escaping Query Values

- `When query values are variables provided by the user, you should escape the values.`

- `This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.`

- `mysql.escape() method can use escape query values`

  ```js
  const mysql = require('mysql2');
  
  const con = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "password",
  	database: "nodedb"
  });
  
  con.connect(function (err) {
  	if (err) return console.log(err.message);
  	const statement = `SELECT * FROM posts WHERE id=${mysql.escape(1)}`;
  	con.query(statement, function (err, result) {
  		if (err) console.log(err.message);
  		console.log(result);
  		con.end()
  	});
  })
  ```
  
  



### Select with placeholder 

- `You can also use a `?` as a placeholder for the values you want to escape.`

- `In this case, the variable is sent as the second parameter in the query() method:`

  ```js
  const mysql = require('mysql');
  
  const id = 30;
  const title = 'none';
  // create mysql connection 
  const connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'nodedb'
  }) ;
  connection.connect((err)=>{
      if(err) return console.log(err);
      const stm =  'SELECT * FROM posts WHERE id = ? OR title = ?';
      connection.query(stm, [id,title], function (err, result) {
          if (err) throw err;
          console.log(result);
      });
  });
  
  //[ RowDataPacket { id: 30, title: 'Post one', text: 'testing post' } ]
  ```

  