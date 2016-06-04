var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
//mongoose.connect('mongodb://localhost:27017/test');
var db=mongoose.connection;
db.on('error',console.error.bind(console,"Connection Error:"));

var routes = require('./routes/index');
var update=require('./routes/update');
var deletemovie=require('./routes/delete');
var addmovie=require('./routes/addmovie');
var getjson=require('./routes/getjson');
//var movieDetails=require('./models/movieDetails');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/add_details', addmovie);
app.use('/update_details', update);
app.use('/deleteMovie', deletemovie);
app.use('/getJSON', getjson);
//app.use('/getMovies', movieDetails);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
app.get('/',function(req,res)
{
  res.send("Hello");
});

module.exports = app;
