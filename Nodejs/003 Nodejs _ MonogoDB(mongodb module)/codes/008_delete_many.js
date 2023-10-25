const mongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const myDB = db.db('nodedb');
    
    const query = { name :  "foo"};

    // Delete all documents were the address starts with the letter "O"
    // const query = { name :  /^O/ };
   
    myDB.collection('users').deleteMany(query,(err,obj)=>{
        if (err) throw err;
         console.log("Delete Count : " + obj.deletedCount);
        db.close();
    });
});