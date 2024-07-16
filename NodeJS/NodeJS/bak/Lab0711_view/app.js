var express = require('express');
var app = express();
app.listen(3000);

app.get("/", function(req, res) {
    res.render("homepage.ejs",{
        username : 'GuestQQPR',
        scoreList : [100, 0, 60, 87, 40, 58],
        twoLine : 'Line1<br>Line2',
        twoLine2 : "<script>alert('ok')</script>",
        studentList : [
            { id : 1, score: 100, result: "pass"},
            { id : 2, score: 90, result: "pass"},
            { id : 3, score: 55, result: "fail"},
            { id : 4, score: 10, result: "fail"},
        ]
    })
})

// .ejs 可以視為一個網頁
// render需要ejs 所以這邊要安裝ejs -> npm install ejs

// 為什麼要建立一個views 因為render預設會去找views資料夾裡的東西



