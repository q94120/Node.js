var express = require('express');
var app = express();
app.listen(3000);


app.get('/products/price/:min/to/:max', function(req, res) {
    res.send(`max: ${req.params.max}, min: ${req.params.min}  `)
    var min = req.params.min;
    // res.send(typeof min)
});
