// npm init -y
//npm install express
// app.js:

var express = require('express');
var app = express();
app.listen(3000);

// nodemon app.js
// https://localhost:3000

app.get("/lab",function (req, res) {
    // C:\NodeJS\Lab0710_static
    // res.send(__dirname);
    res.send(__dirname + '/public');
    
})

// create folder name public
// public/index.html
// var reader = express.static(__dirname + '/public');
// var reader = express.static('./public');
var reader = express.static('public');
app.use(reader);
