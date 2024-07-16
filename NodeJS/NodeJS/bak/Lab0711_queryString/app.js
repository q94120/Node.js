var queryString = require('querystring');
// console.log('OK 2');
var data = {
    id : 3,
    name: "陳冠穎"
};

var result = queryString.stringify(data);
// console.log("Lab: " + result);
// ----------------------------------------------------------------
var partOfUrl = "id=3&name=%E9%99%B3%E5%86%A0%E7%A9%8E";
var data2 = queryString.parse(partOfUrl);
console.log(data2.name);
