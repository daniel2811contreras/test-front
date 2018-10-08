/* mount server */
var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var _const = require('./system/system.js');

/* app epress */
var app = express();

/* Static all routes */
app.use(express.static(path.join(__dirname, 'public')));

//adding all routes to path *
app.get('*', function(req, res) {
  //Response index
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* port and repo */
var PORT = global.url.PORT;
var server = http.createServer(app);

/* Server listen */
server.listen(PORT, function() {
  //Log iinit Server
  console.log('Server is running at ->> ' + global.url.BASE_URL + ' or port: '+ PORT);
});
