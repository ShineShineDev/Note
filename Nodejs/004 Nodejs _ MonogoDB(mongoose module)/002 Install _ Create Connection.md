##                                                          Install & Create Connection



### Install Mongoose Module

- `You can download with npm packeage manger`

  ```cmd
  $ npm install mongoose
  ```





### Require  Module

- `After downloaded mongoose, you must be require module in your node app.`

  ```js
  const mongoose = require('mongoose');
  ```

  



### Create Default Connection 

- `You can get the default connection object with `**`mongoose.connect`**`Once connected, the open event is fired on the` **`mongoose.connection instance.`**
- `You can also specify several more parameters in the uri`:

  - `mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true});`
-   `You can also connect to multiple mongos instances for high availability in a sharded cluster`
- `mongoose.connect('mongodb://mongosA:27501,mongosB:27501', cb);`
  
- `You can disconnects all connections with` [connection Events](https://mongoosejs.com/docs/connections.html#connection-events)
  - ` mongoose.disconnect()`

  ```js
  //Import the mongoose module
  const mongoose = require('mongoose');
  
  // db url
  const mongoDB = 'mongodb://127.0.0.1/my_database';
  
  //Set up default mongoose connection with error handling
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
    then(()=> console.log('You are now connected to Mongo!')).
  catch( err => console.error('MongoDB connection error:', err));
  
  // Get Connection instance
  const db = mongoose.connection;
  ```

  

> `If you need to create additional connections you can use `**`mongoose.createConnection()`.** `This takes the same form of database URI (with host, database, port, options etc.) as `**`connect() and returns a Connection object.` **







### [Replica Set Connections](https://mongoosejs.com/docs/connections.html#replicaset_connections)

- `To` **`connect`** `to a replica set you pass a comma delimited list of hosts to connect` **`to rather than a single host.`**

- **`Syntax`** :` mongoose.connect('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]' [, options]);`

- `You can` **`connect to a single node`** `replica set, specify the `**`replicaSet`** `option.`

  ```js
  // multiple replica sets
  mongoose.connect('mongodb://user:pw@host1.com:27017,host2.com:27017,host3.com:27017/testdb');
  
  // you can connect to a single node replica set
  mongoose.connect('mongodb://host1:port1/?replicaSet=rsName');
  ```

  





### [Multi-mongos support](https://mongoosejs.com/docs/connections.html#mongos_connections)

- `You can also connect to` **`multiple mongos instances for high availability`** `in a sharded cluster. You do` [not need to pass any special options to connect to multiple mongos](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/connect/#connect-to-sharded-cluster) `in mongoose 5.x.`

  

  ```js
  // Connect to 2 mongos servers
  mongoose.connect('mongodb://mongosA:27501,mongosB:27501', cb);
  ```








### [Multiple connections](https://mongoosejs.com/docs/connections.html#multiple_connections)

- `You may need multiple connections to MongoDB for several reasons. One reason is if you have multiple databases or multiple MongoDB clusters. Another reason is to work around` [slow trains](https://thecodebarbarian.com/slow-trains-in-mongodb-and-nodejs). `The `**`mongoose.createConnection()`** `function takes the same arguments as `**`mongoose.connect()`** `and returns a new connection.`

  ````js
  const conn = mongoose.createConnection('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]', options);
  ```

  

- `If you` **`use multiple connections`**`, you should `**`make sure you export schemas, not models`**. `Exporting a model from a file is called the export model pattern. The export model pattern is limited because you can only use one connection.`

  ```javascript
  
  const userSchema = new Schema({ name: String, email: String });
  
  // The alternative to the export model pattern is the export schema pattern.
  module.exports = userSchema;
  
  // Because if you export a model as shown below, the model will be scoped
  // to Mongoose's default connection.
  // module.exports = mongoose.model('User', userSchema);
  ```



- `If you use the export schema pattern, you still need to create models somewhere. There are two common patterns. First patterns is to export a connection and register the models on the connection in the file:`

  ```js
  // connections/fast.js
  const mongoose = require('mongoose');
  
  const conn = mongoose.createConnection(process.env.MONGODB_URI);
  conn.model('User', require('../schemas/user'));
  
  module.exports = conn;
  
  // connections/slow.js
  const mongoose = require('mongoose');
  
  const conn = mongoose.createConnection(process.env.MONGODB_URI);
  conn.model('User', require('../schemas/user'));
  conn.model('PageView', require('../schemas/pageView'));
  
  module.exports = conn;
  ```

  

- `Another alternative patterns is to register connections with a dependency injector or another` [inversion of control (IOC) pattern](https://thecodebarbarian.com/using-ramda-as-a-dependency-injector).

  ```js
  const mongoose = require('mongoose');
  
  module.exports = function connectionFactory() {
      const conn = mongoose.createConnection(process.env.MONGODB_URI);
      conn.model('User', require('../schemas/user'));
      conn.model('PageView', require('../schemas/pageView'));
      return conn; 
  };
  ```





### SSL Connections

- `Mongoose supports connecting` to [MongoDB clusters that require SSL connections](https://docs.mongodb.com/manual/tutorial/configure-ssl/).

- `The ssl option defaults to false for connection strings that start with mongodb://`. 

-  `However, the ssl option defaults to true for connection strings that start with mongodb+srv://. `

- `So if you are using an srv connection string to connect to` [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), `SSL is enabled by default.`

- ` Setting the ssl option to true in` [`mongoose.connect()`](https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-connect) `or your connection string is enough to connect to a MongoDB cluster using SSL:`

  ```js
  mongoose.connect('mongodb://localhost:27017/test', { ssl: true });
  // Equivalent:
  mongoose.connect('mongodb://localhost:27017/test?ssl=true');
  
  // If you try to connect to a MongoDB cluster that requires SSL without enabling the ssl option, mongoose.connect() will error out with the below error
  MongooseServerSelectionError: connection <monitor> to 127.0.0.1:27017 closed
      at NativeConnection.Connection.openUri (/node_modules/mongoose/lib/connection.js:800:32)
      ...
  ```

  

#### SSL Validation

- `By default, Mongoose validates the SSL certificate against a `[certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) `to ensure the SSL certificate is valid. To disable this validation, set the sslValidate option to false`.

  ```js
  mongoose.connect('mongodb://localhost:27017/test', {
    ssl: true,
    sslValidate: false
  });
  
  // if you disable ssl validatin in porduction Mongoose will show below error message:
  MongooseServerSelectionError: unable to verify the first certificate
  ```

  

> ⚠️  `In most cases, you should not disable SSL validation in production. However, sslValidate: false is often helpful for debugging SSL connection issues. If you can connect to MongoDB with sslValidate: false, but not with sslValidate: true, then you can confirm Mongoose can connect to the server and the server is configured to use SSL correctly, but there's some issue with the SSL certificate.`







## [See More](https://mongoosejs.com/docs/connections.html#connections)



