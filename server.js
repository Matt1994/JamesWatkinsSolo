// BASIC REQUIRES
var express = require("express");
var exphbs  = require('express-handlebars');

// CONFIG FILE REQUIRE
var config = require("./config");

// ROUTES REQUIRE
var index_route = require("./routes/index");

// APP INITIALISATION
var app     = express();
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// ROUTES SETUP
app.use("/", index_route);

// START APP
app.listen(config.port, function(){
    console.log("Listening on port " + config.port);
});