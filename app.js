const jwt = require('jsonwebtoken');
const config = require('./bin/config');
const db = require('./database/db').connect();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const index = require('./routes/index');
const register = require('./routes/register');
const login = require('./routes/login');

var app = express();

const authValidator = (req, res, next) => {
  console.log('req.headers', req.headers);  
  console.log('req.body', req.body);
  // const token = jwt.verify(req.body.token, config.secret);
  next();
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/register', register);
app.use(authValidator);
app.use('/', index);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

module.exports = app;
