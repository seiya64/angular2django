var port = process.env.port || 1337
var express = require('express');
var app = express();
var path = require('path');

var __projectRoot = __dirname + '/src';
var __nodeModules = __dirname + '/node_modules';

app.use(express.static(__projectRoot));
app.use('/node_modules', express.static(__nodeModules));

app.get('/', function (req, res) {
    res.sendFile(path.join(__projectRoot + '/index.html'));
});

app.listen(port, function () {
    console.log('Server up and running on http://localhost:' + port + '/');
});
