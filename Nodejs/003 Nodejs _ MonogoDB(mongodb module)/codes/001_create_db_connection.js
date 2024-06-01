const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"

mongoClient.connect(url,(err) => {
   if (err) return console.log(err.messag);
   console.log("Database Connection created!");
});