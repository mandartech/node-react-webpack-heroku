'use strict';

var http = require('http');
var express = require('express');

var app = express();

var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('node-react-webpack-heroku Express server running on %d', port);
});
