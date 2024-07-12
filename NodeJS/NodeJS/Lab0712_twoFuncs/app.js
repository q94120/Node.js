var express = require("express");

var app = express();

app.listen(3000);

function step1(req, res, next) {
    res.write("step 1 ,")
    if (req.params.data % 2 == 0){
        next();
    } else {
        res.end("can't be 2 %")
    }
}

function step2(req, res, next) {
    res.end('step 2')
}

app.get("/lab/:data", [step1, step2]);