const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl,(err,db)=>{
    if(err) return console.log(err.message); 
  const myDB = db.db("nodedb");
    
    const query = { name: "Shine" };
    myDB.collection("users").findOne(query,(err,res)=>{
        if(err) return console.log(err.message); 
        console.log(res);
        db.close();
    })
});