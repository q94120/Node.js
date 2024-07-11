var express = require('express');
var app = express();
app.listen(3000);

app.use(express.static('./public'));

var bp = require('body-parser');
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.post("/member/login" , function(req, res){
    // res.send(req.body.password)
    res.send(`username:${req.body.username} <br> password:${req.body.password}`)
});