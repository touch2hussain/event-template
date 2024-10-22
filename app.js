// to make sure relative paths are ok
process.chdir(__dirname);

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var compressible = require('compressible');
var app = express();
app.use(compression({
  threshold: false,
  filter: shouldCompress
}));

function shouldCompress(req, res) {
  var type = res.get('Content-Type');
  var reqEncode = req.get('Accept-Encoding');
  console.log('%s', type);
  console.log('%s', reqEncode);
  if (!compressible(type)) {
    console.log('%s not compressible', type);
    return false
  }

  return compression.filter(req, res)
  //return true;
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/public/home.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//Setup for live loading 
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;