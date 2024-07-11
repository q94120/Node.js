// var http = require("http");
// console.log("Starting...");
// var host = "127.0.0.1";
// var port = 80;
// var server = http.createServer( function (request, response) {
// 	console.log("Got a request: " + request.url);
// 	// response.writeHead(200, {"Content-type": "text/plain"});
// 	response.writeHead(200, {"Content-type": "text/html"});
// 	response.end("<book><title>00000</title><price>500</price></book>");
// });

// server.listen(port, host, function () {
// 	console.log("Listening...");
// });

// -------------------

// console.log("Starting...");
// var fs = require("fs");
// var host = "127.0.0.1";
// var port = 80;
// var express = require("express");
// var app = express();

// app.get("/", function (request, response) {
// 	response.send("hello!");
// });

// app.listen(port, host);

// -------------------

// console.log("Starting...");
// var fs = require("fs");
// var host = "127.0.0.1";
// var port = 80;
// var express = require("express");

// var app = express();

// app.get("/", function (request, response) {
// 	response.send("hello!");
// });

// app.get("/hello/:text", function (request, response) {
// 	response.send("Hello! " + request.params.text);
// });

// app.listen(port, host);

// -------------------

console.log("Starting...");
var fs = require("fs");
var host = "127.0.0.1";
var port = 80;
var express = require("express");
var app = express();

app.get("/lab/test", function (request, response) {
	response.send("hello!");
});

app.get("/hello/:text", function (request, response) {
	response.send("Hello!" + request.params.text);
});

// Web伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );
// 令public為主目錄

app.listen(port, host);

