console.log("Starting...");
var fs = require("fs");
var host = "127.0.0.1";
var port = 3000;
var express = require("express");

var app = express();

app.get("/", function (request, response) {
	response.send("hello!");
});

app.get("/hello/:text", function (request, response) {
	response.send("Hello!" + request.params.text);
});

// Web伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );

app.listen(port, host);
