var express = require('express');
var compression = require('compression');
var request = require('request');
var app = express();
var path = require('path')
var port = 3012;
// var open = require('open')
app.use('/dist',express.static(__dirname + '/dist'));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(port, function (err) {
    if (err) {
        console.log('err : ', err)
    } else {
        console.log(`http://localhost:${port}`)
    }
})
