// npm install express
var express = require('express');
var app = express();
app.listen(3000);
// nodemon app.js
// http://localhost:3000

// app.get('/', function (in, on) 
// end-point route
app.get('/', function (request, response) {
    response.send('Hello World!');
});

app.get('/products/info/3', function (request, response) {
    response.json({
        id:3,
        name: 'Product 3',
        price: 1000,
    })
})

// app.get('/member/login', function (request, response) {
//     // response.send('Hello World!');
//     // send a form to client
// });


var memberRouter = express.Router();
memberRouter.get('/', function (request, response) {
    response.send('test lab');
});
memberRouter.get('/joinus', function (request, response) {
    response.send('join form');
});
memberRouter.get('/login', function (request, response) {
    response.send('login');
});

app.use("/member", memberRouter);
// http://localhost:3000/
// http://localhost:3000/member/login

app.use( function (request, response) {
    response.send('錯誤錯誤錯誤錯誤錯誤');
    // process form data
});

