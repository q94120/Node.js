var express = require("express");

var productRouter = express.Router();



productRouter.get("/index", function (req, res) {
    res.send("productRouter :: index" + req.gData)
})

productRouter.get("/list", function (req, res) {
    res.send("productRouter :: list")
})

productRouter.get("/info/:num", function (req, res) {
    var num = req.params.num;
    res.send(`productRouter:info for #${num}`)
})

module.exports = productRouter;