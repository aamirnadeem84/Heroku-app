var express = require("express");
var app = express();
var path = require("path");

// app.get("/", function(req, res, next){
//    console.log("This is my Second output");
//    next(); 
// });git push heroku master

app.get("/", function(req, res){
//    console.log("This is my First output");

res.status(200).sendfile(path.join(__dirname, "Public", "Index.html"));

});


app.listen(3000, function(){
   console.log("Access port 3000");
})