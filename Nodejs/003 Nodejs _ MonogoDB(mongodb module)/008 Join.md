##                                                                   Node.js MongoDB Join



> `MongoDB is not a relational database, but you can perform a left outer join by using the `**`$lookup` **`stage.`




### Left outer join with lookup (w3school) 

- **`$lookup`** `stage lets you specify which collection you want to join with the current collection, and which fields that should match.`

- `Consider you have a "orders" collection and a "products" collection:`




### orders collection

  ```js
  [
   { _id: 1, product_id: 154, status: 1 }
  ]
  ```

  

### products collection

  ```js
  [
   { _id: 154, name: 'Chocolate Heaven' },
   { _id: 155, name: 'Tasty Lemons' },
   { _id: 156, name: 'Vanilla Dreams' }
  ]
  ```

  

### Example

  ```js
  const MongoClient = require('mongodb').MongoClient;
  const url = "mongodb://127.0.0.1:27017/";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection('orders').aggregate([
      { $lookup:
         {
           from: 'products',
           localField: 'product_id',
         foreignField: '_id',
           as: 'orderdetails'
         }
       }
      ]).toArray(function(err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res));
      db.close();
    });
  });
  
  
  [
    {
        "_id": 1,
        "product_id": 154,
        "status": 1,
        "orderdetails": [
            { "_id": 154, "name": "Chocolate Heaven" 
            } 
        ]
    }
  ]
  ```

  


