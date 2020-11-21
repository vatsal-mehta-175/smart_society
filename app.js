var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var adminLoginRouter = require('./routes/admin_login_routes');
var residenceLoginRouter = require('./routes/residence_login_routes');
var gateLoginRouter = require('./routes/gatekeeper_login_routes');
var tenantLoginRouter = require('./routes/tenant_login_routes');
var AmenitiesRouter = require('./routes/admin_amenities');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/adminLogin',adminLoginRouter);
app.use('/gateLogin',gateLoginRouter);
app.use('/residenceLogin',residenceLoginRouter);
app.use('/tenantLogin',tenantLoginRouter);
app.use('/am_get',AmenitiesRouter);
app.use('/am_update',AmenitiesRouter);
app.use('/am_add',AmenitiesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
