var fs = require("fs");
console.log("Starting...");
fs.writeFile("./hello.html", 
  "<html><body><h1>Hello!</h1></body></html>",
  function (err) {
    if(err){
        console.log(err);
    } else {
    console.log("123");
  }
  });
console.log("Finish Flag.");