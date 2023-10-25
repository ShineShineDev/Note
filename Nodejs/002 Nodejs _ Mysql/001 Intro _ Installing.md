# 🌟  NODEJS WIHT MYSQL  🌟 



### Mysql

- `open-source relational database management system.`
- ``Structured Query Language.`
- `MySQL is  One of the most popular databases`
-  `Before use MSQL you should have MySQL installed on your computer. `





### Insatll & Run Mysql on Ubuntu 

```js
> sudo apt update //Update the local packages index 

> sudo apt install mysql-server //Install the mysql-server package

> sudo systemctl start mysql.service //Automatically started mysql service on system open
> sudo systemctl status mysql //Mysql service Status 

> sudo service mysql stop //Stop Mysql server

> sudo mysql -u root -p	//Connect to MySQL server
mysql> show databases //Display all databases 
//update root password
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';FLUSH PRIVILEGES;
```





### Install MySQL Driver

- `To access a MySQL database in Node.js, you need a MySQL driver.`

- `"mysql" module can use for driver`

  ```js
  >npm install mysql
  //Client does not support authentication protocol requested by server; consider upgrading MySQL client
  >npm install mysql2
  ```





### Create Connection

- `import "mysql" and then to create connection use mysql.createConnection(host, user, password, option) method`

  ```js
  const mysql = require('mysql'); //Import "mysql" module
  
  const connection = mysql.creatConnection({
    host: "localhost",
    user: "root",
    password: ""
  })
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Mysql Connected!");
  })
  ```





### Query method 

- ` The connection object created have mysql.query method for querying the database`

- `This method take two parameter frist is sql statements and second parameter is callback(err,result)`

  ```js
  const mysql = require('mysql');
  
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //mysql.query([sql statements],[callback])
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });
  ```

  



## MYSQL STATEMENTS

````JS
const select = "SELECT * FROM posts"; // selct all
const select = "SELECT * FROM posts WHERE id=id"; // specifie row
const select = "SELECT id, title FROM posts"; // specifie column

const insert = "INSERT INTO posts(title,text) VALUES('Post one','post one text')"
const inset = "INSERT INTO posts (title, text) VALUES ?"; // multiple insert placeholder
  var values = [
    ['Post One', 'Post one text'],
    ['Post Two', 'Post Two text'], 
  ];


````







