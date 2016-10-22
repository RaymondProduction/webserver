// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

var currentDir='/home/raymond/Documents/programming/javasript/node/';
// создаём маршрут для главной страницы
// http://localhost:8080/
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




// запускаем сервер на порту 8888
app.listen(8888);
// отправляем сообщение
console.log('Start WEB server!');
