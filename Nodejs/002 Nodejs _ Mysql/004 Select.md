

### Select All 

- `To select data from a table in MySQL, use the "SELECT * FROM tablename" statement.`

- `The result object is an array containing each row as an object.`

  ```js
  const mysql2 = require('mysql2'); // require mysql module
  
  //create DB Connection
  const con = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: "nodedb"
  })
  //DB Connection fail or success
  con.connect((err) => err ? console.log(err.message) : console.log('Database server is running'))
  
  const statement = "SELECT * FROM posts"; //Select All Statement
  con.query(statement,function (err, result) {
  if (err) throw err;
  console.log(result);
  con.end()
  });
  ```

  



### Selecting Specifie Columns

- `To select some Specifie columns in a table, use the ""SELECT id,title FROM posts"," statement followed by the column name.`

  ```js
  const mysql = require('mysql');
  
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
  });
  
  con.connect(function(err) {
     if (err) return console.log(err.message);
     const statement = "SELECT id, title FROM posts";
     con.query(statement, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  })
  ```

  





### The Fields Object

- `The third parameter of the callback function is an array containing information about each field in the result.`

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
    con.query("SELECT * FROM posts", function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
    });
  });
  
  // console result
  [
    FieldPacket {
      catalog: 'def',
      db: 'nodedb',
      table: 'posts',
      orgTable: 'posts',
      name: 'id',
      orgName: 'id',
      charsetNr: 63,
      length: 11,
      type: 3,
      flags: 16899,
      decimals: 0,
      default: undefined,
      zeroFill: false,
      protocol41: true
    },
    FieldPacket {
      catalog: 'def',
      db: 'nodedb',
      table: 'posts',
      orgTable: 'posts',
      name: 'title',
      orgName: 'title',
      charsetNr: 33,
      length: 765,
      type: 253,
      flags: 0,
      decimals: 0,
      default: undefined,
      zeroFill: false,
      protocol41: true
    },
    FieldPacket {
      catalog: 'def',
      db: 'nodedb',
      table: 'posts',
      orgTable: 'posts',
      name: 'text',
      orgName: 'text',
      charsetNr: 33,
      length: 765,
      type: 253,
      flags: 0,
      decimals: 0,
      default: undefined,
      zeroFill: false,
      protocol41: true
    }
  ]
  ```

  

