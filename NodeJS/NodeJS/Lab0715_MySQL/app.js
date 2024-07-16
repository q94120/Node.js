var express = require('express');
var app = express();
app.listen(3000);

app.get('/', function(req, res) {
    res.send('Hello World');
})

var mysql = require("mysql");
var conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "northwind"
});

var bp = require('body-parser');
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

conn.connect( function (err) {
    if (!err) {
        console.log("連線成功")
        return;
    }
    console.log(err);
})


app.get("/LOL/info/:id", function(req, res) {
    conn.query("SELECT * FROM products where productId = ?",
        [req.params.id],
        function(err, result){
            // res.render("productList.ejs", {rows: result})
            // res.send(JSON.stringify(result))
            res.json(result);
        }
    )
    // res.send('Hello World');
})

// LOL/info/10/20
app.get("/LOL/price/:min/:max", function(req, res) {
    conn.query("SELECT * FROM products WHERE productId BETWEEN ? AND ? ",
        [req.params.min, req.params.max],
        function(err, result){
            // res.render("productList.ejs", {rows: result})
            // res.send(JSON.stringify(result))
            res.json(result);
        }
    )
    // res.send('Hello World');
})

app.post("/LOL/new", function(req, res) {
    conn.query(`INSERT INTO products (ProductID, ProductName, Discontinued)
    values (?, ?, ?)`,
    [req.body.ProductID, req.body.ProductName, req.body.Discontinued],
    function(err, result){
        res.json(JSON.stringify(result));
        }
    )
})

app.put("/LOL/update", function(req, res) {
    conn.query(`UPDATE products set UnitsInStock = ? where ProductID = ?`,
        [req.body.UnitsInStock, req.body.ProductID],
        function(err, result){
            res.json(JSON.stringify(result));
        }
    )
})
