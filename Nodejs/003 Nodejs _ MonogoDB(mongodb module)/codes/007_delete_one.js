const mongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const myDB = db.db('nodedb');

    const query = { name: 'fooage=22'};

    myDB.collection('users').deleteOne(query,(err,obj)=>{
        if (err) throw err;
        console.log("Delete Count : " + obj.deletedCount);
        db.close();
    });

});