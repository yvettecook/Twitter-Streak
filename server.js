var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('index');
});

server.listen(3000, function() {
  console.log('Server running on port 3000');
});

module.exports = server;
