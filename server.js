'use strict';

var http = require('http');
var path = require('path');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './ui/public/index.html'));
});

app.get('/main.js', function(req, res) {
  const filename = 'public/main.js';
  res.append('Content-Type', 'application/javascript');
  res.sendFile(filename, {
    root: path.join(__dirname, './ui/')
  });
});

var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('node-react-webpack-heroku Express server running on %d', port);
});
