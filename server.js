var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
var mongoose = require("mongoose");
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"
var expressHandlebars = require("express-handlebars");
var bodyParser = require('body-parser');


var router = express.Router();

app.use(express.static(__dirname + "/public"));
app.use(router);

app.engine("handlebars", expressHandlebars({
    defaultLayout:"main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(db, function(error){
    if (error){
        console.log(error);
    }
    else {
        console.log("Mongoose connection successful");
    }
});




//=================================================================
app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});