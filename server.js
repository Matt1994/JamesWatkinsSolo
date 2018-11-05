var express = require("express");
var app     = express();

app.get("/", function(){
    res.send("Hello World!");
});


app.listen(3000, function(){
    console.log("Listening on port 3000");
});