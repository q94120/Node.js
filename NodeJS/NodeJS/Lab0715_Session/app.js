var express = require('express');
var app = express();
app.listen(3000);

var bp = require('body-parser');
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

var session = require('express-session')
app.use(session({
    secret: "P@ssw0rd",
    resave: false,
    saveUninitialized: true,
}));

app.get('/', function(req, res) {
    var userName = req.session.userName || "Guest";
    res.render('index.ejs', {userName: userName});
})

app.get('/member/login', function(req, res) {
    res.render('login.ejs', {});
})

app.post('/member/login', function(req, res){
    if (req.body.userName) {
        // res.send(req.body.userName + " Login successfully");
        req.session.userName = req.body.userName;
        res.redirect('/');
    } else {
        res.send("Login Failed");
    }
})

app.get('/member/memberOnly', function(req, res){
    var userName = req.session.userName
    if(userName == "Guest"){
        res.redirect("/");
        return;
    } else {
        res.render('memberOnly.ejs', {userName: userName});
    }
})

app.get('/member/logout', function(req, res){
    delete req.session.userName;
    res.redirect("/");
})

