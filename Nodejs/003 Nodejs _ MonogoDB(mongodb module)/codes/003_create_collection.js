const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";


mongoClient.connect(url,(err,db)=>{
    if (err) return console.log(err.messag);
    const myDB = db.db('nodedb')
    myDB.createCollection("users", (err, res)=> {
       if (err) return console.log(err.messag);
       console.log("users Collection created!");
       db.close();
    });
 
})