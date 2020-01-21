"use strict";

var express = require('express');

var app = express();

var PORT = require('./config.js').PORT;

var public_routes = require('./routes/public.js');

var dashboard_routes = require('./routes/dashboard.js');

var cors = require('cors');

var bodyParser = require('body-parser');

var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.get('/image/:image', function (req, res) {
  res.sendFile(path.join(__dirname, "./uploads/".concat(req.params.image)));
});
app.use('/', public_routes);
app.use('/admin/', dashboard_routes);
app.listen(PORT, function () {
  return console.log("Server is running on port ".concat(PORT));
});