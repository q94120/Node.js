var express = require("express");

var app = express();

app.listen(3000);

app.use(function(req, res, next) {
    // res.send("OK")
    req.gData = 100;
    next();
})

// var gData = 100

// 如果不寫./  他可能會錯認為該資料夾裡有npm安裝的資料夾
var productRouter = require("./productRouter");

app.use("/product", productRouter);

