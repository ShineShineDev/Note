const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl,(err,db)=>{
    if(err) return console.log(err.message); 
    const myDB = db.db("nodedb");
    
    myDB.collection("users").find( {} ).toArray( (err, result) => {
        if(err) return console.log(err.message); 
        console.log(result);
        db.close();
  });
})