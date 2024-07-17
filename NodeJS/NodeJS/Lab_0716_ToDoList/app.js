var express = require('express');
var app = express();
app.listen(3000)

var mysql = require('mysql');
var conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "tododb"
})

var bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send(' type    /todo/index');
})

conn.connect( function (err) {
    console.log(err);
})

app.get('/todo/index', function(req, res) {
    // res.render('todoIndex.ejs',{});
    conn.query("select * from todoTable",[],
        function(errr, result){
            // res.json(result);
            res.render('todoIndex.ejs',{todoList: result});
    })
})


// 為了代辦事項清單點了之後可以跳轉
app.get("/todo/create", function(req, res) {
    res.render("todoCreate.ejs", {})
})

app.post("/todo/create", function(req, res) {
    // res.send(req.body)
    // {"Name":"Leo A","IsComplete":"1"}
    // insert into todoTable (title, isComplete) values ('Leo A',1)
    var titleValue = req.body.Name;
    var isCompleteValue = req.body.IsComplete ? 1 : 0;
    conn.query("INSERT INTO todoTable (title, isComplete) values (?,?)",
        [titleValue, isCompleteValue],
        function(err, result){
            res.redirect('/todo/index');
        }
    // res.send(JSON.stringify(req.body))
    )
})

app.get('/todo/edit/:id', function(req,res){
    // res.send(req.params.id)
    conn.query("select * from todoTable where todoTableId=?",
        [req.params.id],
        function(err, result){
            // res.send(req.params.id)
            // res.send(result)
            res.render('todoEdit.ejs', {todoItem: result[0]})
        }
    )
})

app.post('/todo/edit/:id', function(req, res){
    // res.send(req.body.TodoItemId)  // 看到1
    conn.query("UPDATE todoTable SET title= ?, isComplete= ? WHERE todoTableId= ?",
        [req.body.Name, req.body.IsComplete ? 1 : 0, req.params.id],
        function(err, result){
            res.send('updateOK')
            // res.redirect('/todo/index');
        })
})

app.get("/Todo/Delete/:id", function(req, res){
    // conn.query("update todoTable set title = '',isComplete = '', WHERE todoTableId = ?",
    //     [req.params.id],
    //     function(err, result){
    //         res.send('deleteOK')
    //         // res.redirect('/todo/index');
    //     })
    conn.query("select * from todoTable where todoTableId=?",
        [req.params.id],
        function(err, result){
            // res.send(req.params.id)
            // res.send(result)
            res.render('todoDelete.ejs', {todoItem: result[0]})
        }
    )
})

app.post('/todo/delete/:id', function(req, res){
    // res.send(req.body.TodoItemId)  // 看到1
    conn.query("DELETE FROM todoTable WHERE todoTableId = ?;",
        [req.params.id],
        function(err, result){
            // res.send('delete OK')
            if (err){
                res.send(JSON.stringify(err));
            } else{
                res.redirect('/todo/index');
            }
        })
})

