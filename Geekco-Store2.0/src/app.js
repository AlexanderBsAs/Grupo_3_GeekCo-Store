var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')
const session = require("express-session")
var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');
var productsRouter = require('./routes/products.js');
var rememberMiddleware = require("./Middlewares/rememberMe.js")
var app = express();

const bodyParser = require('body-parser');

// Configurar body-parser para analizar datos de formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride("_method"))
app.use(session({secret: "Secretgecko123",resave: true,
saveUninitialized: true}))
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});
app.use(rememberMiddleware)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productsRouter);

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