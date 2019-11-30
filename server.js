'use strict';

var http = require('http');
var path = require('path');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './ui/public/index.html'));
});

app.get('/(*).js.gz', function(req, res) {
  const filename = 'public/'+ req.params[0].split("/").pop() + '.js.gz';
  res.append('Content-Encoding', 'gzip');
  res.append('Content-Type', 'application/javascript');
  res.sendFile(filename, {
    root: path.join(__dirname, './ui/')
  });
});

app.get('/(*).js.map', function (req, res) {
  const filename = 'public/'+ req.params[0].split("/").pop() + '.js.map';
  res.append('Content-Type', 'application/javascript');
  res.sendFile(filename, {
    root: path.join(__dirname, './ui')
  });
});

var imagesPath = path.join(__dirname, './ui/public/images');
app.use('/images', express.static(imagesPath));

var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('node-react-webpack-heroku Express server running on %d', port);
});
