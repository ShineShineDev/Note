const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017/";

mongoClient.connect(mongoUrl,(err,db)=>{
    if(err) return console.log(err.message);
    const user  = {
        name : 'foo',
        age : 23
    };
    const myDB = db.db("nodedb");

    myDB.collection('users').insertOne(user,(err,result)=>{
        if(err) return console.log(err.message);
        console.log("insertedCount " + result.insertedCount);
        db.close();
    })
})