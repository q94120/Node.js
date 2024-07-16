var express = require('express');
var app = express();
app.listen(3000);

app.get("/lab", function(req, res){
    // console.log('OK');
    // res.send('OK123');
    res.send(req.query.id + "---" + req.query.name);
});

// http://localhost:3000/lab?id=3&name=chen