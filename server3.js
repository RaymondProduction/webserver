// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
/*
app.get('/test/', function(req, res) {
  res.sendfile('i.html');
});
*/
app.get('/:id', function(req, res){
    //res.send('user ' + req.params.id);
    res.sendfile(req.params.id);
});

app.get('/js/:id', function(req, res){
    res.sendfile('/home/raymond/Documents/programming/javasript/node/js/'+req.params.id);
});

app.get('/js/vendor/:id', function(req, res){
    res.sendfile('/home/raymond/Documents/programming/javasript/node/js/vendor/'+req.params.id);
});

app.get('/css/:id', function(req, res){
    res.sendfile('/home/raymond/Documents/programming/javasript/node/css/'+req.params.id);
});




// запускаем сервер на порту 8888
app.listen(8888);
// отправляем сообщение
console.log('Сервер стартовал!');
