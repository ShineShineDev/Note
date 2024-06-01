const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/nodedb"

mongoClient.connect(url,(err,db)=>{
    if (err) return console.log(err.messag);
    console.log("nodedb Database created!");
    db.close();
})