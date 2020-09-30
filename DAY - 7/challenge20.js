const url = "mongodb+srv://user:satjun321@cluster0.lji2s.gcp.mongodb.net/MyDatabase?retryWrites=true&w=majority";

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MyDatabase");
  dbo
    .collection("empDetails")
    .find({})
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});


