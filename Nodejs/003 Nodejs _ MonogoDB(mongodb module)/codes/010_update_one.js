const mongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl,(err,db)=>{
    const dbObj = db.db("nodedb");
    const targetObj = { name : "Shine Shine Updated !"};
    const updateObj =  { $set: { name : "Shine Shine"} };
    dbObj.collection("users").updateOne(targetObj,updateObj,(err,res)=>{
        if (err) throw err;
        console.log("modifiedCount : " + res.modifiedCount);
        db.close();
    });
})