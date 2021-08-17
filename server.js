// Create object Express
var express = require('express');

// Create to  Express- application
var app = express();

var currentDir='/home/program/task_02/webserver/';

// http://localhost:80/
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.get('/:id', function(req, res){
    //res.send(req.params.id);
    res.sendfile(req.params.id);
});

app.get('/js/:id', function(req, res){
    res.sendfile(currentDir+'js/'+req.params.id);
});

app.get('/js/vendor/:id', function(req, res){
    res.sendfile(currentDir+'js/vendor/'+req.params.id);
});

app.get('/css/:id', function(req, res){
    res.sendfile(currentDir+'css/'+req.params.id);
});


app.listen(8082);

console.log('Start WEB server!');
