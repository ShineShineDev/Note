## Popular Node modules for database systems



- [Cassandra](http://expressjs.com/en/guide/database-integration.html#cassandra)
- [Couchbase](http://expressjs.com/en/guide/database-integration.html#couchbase)
- [CouchDB](http://expressjs.com/en/guide/database-integration.html#couchdb)
- [LevelDB](http://expressjs.com/en/guide/database-integration.html#leveldb)
- [MySQL](http://expressjs.com/en/guide/database-integration.html#mysql)
- [MongoDB](http://expressjs.com/en/guide/database-integration.html#mongodb)
- [Neo4j](http://expressjs.com/en/guide/database-integration.html#neo4j)
- [Oracle](http://expressjs.com/en/guide/database-integration.html#oracle)
- [PostgreSQL](http://expressjs.com/en/guide/database-integration.html#postgresql)
- [Redis](http://expressjs.com/en/guide/database-integration.html#redis)
- [SQL Server](http://expressjs.com/en/guide/database-integration.html#sql-server)
- [SQLite](http://expressjs.com/en/guide/database-integration.html#sqlite)
- [Elasticsearch](http://expressjs.com/en/guide/database-integration.html#elasticsearch)



## Integration with MySQL 

### Installation

```sh
$ npm install mysql
```

### Implementation

```js
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_db'
})
connection.connect()

connection.query('SELECT * FROM users', function (err, rows, fields) {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
})

connection.end()
```



>  [Learn More]: D:\Desktop\Note\Nodejs\003Nodejs&amp;MonogoDB



### Integration with MongoDB

### Installation

```sh
$ npm install mongodb
```

### Implementation

```js
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
  if (err) throw err

  var db = client.db('animals')

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})
```

