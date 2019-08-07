var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://minh:minhthao@cluster0-muapu.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("myNewDB");
    dbo.createCollection("bang2", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("bang2").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });

});
