const mongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl,(err,db)=>{
    const dbObj = db.db("nodedb");
    // Update all documents where the name starts with the letter "S"
    // const myquery = { nane : /^S/ };
    const targetObj = { name : "foo"};
    const updateObj =  { $set: { name : "Shine Shine"} };
    
    dbObj.collection("users").updateMany(targetObj,updateObj,(err,res)=>{
        if (err) throw err;
        console.log("modifiedCount : " + res.modifiedCount);
        db.close();
    });
})