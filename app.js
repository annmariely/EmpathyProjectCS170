/**
 * Module dependencies.
 */

var express = require('express');
var index = require('./routes/index');
/*var games = require('./routes/games');
var playing = require('./routes/playing');
var login = require('./routes/login');
var profile = require('./routes/profile');
var friends = require('./routes/friends');*/

var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.viewSplash);
// Example route
// app.get('/users', user.list);
app.get('/home', index.viewHome);
app.get('/games', index.viewGames);
app.get('/playing', index.viewPlaying);
app.get('/playing1', index.viewPlaying1);
app.get('/playing2', index.viewPlaying2);
app.get('/login', index.viewLogin);
app.get('/profile', index.viewProfile);
app.get('/friends', index.viewFriends);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
