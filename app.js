var express = require('express');
var app = express();
var db = require('./db');
var AuthController = require('./user/AuthController');

var UserController = require('./user/UserController');
app.use('/users', UserController);
app.use('/api/auth', AuthController);
module.exports = app;
