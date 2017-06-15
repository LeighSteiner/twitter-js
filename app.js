// const express = require( 'express' );
// const app = express();
// const nunjucks = require('nunjucks')
// const routes = require('./routes');
// const bodyParser = require('body-parser');

// app.listen(3000, function(){
// 	console.log('listening on port 3000…');
// });
// // Kelaiya is here yay!!
// // var locals = {
// //     title: 'Classmates',
// //     people: [
// //         { name: 'Emily'},
// //         { name: 'Danni' },
// //         { name: 'Omri'}
// //     ]
// // };
// // const people = [{name: 'Your Majesty'}, {name: 'Hannah Baker'}, {name: 'Clay'}];
// // const leighPeople = [{name: "Melanie"}, {name: 'Elizabeth'}, {name: 'Mister Wednesday'}];
// app.use('/', routes);
// app.set('view engine', 'html'); // have res.render work with html files
// app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// nunjucks.configure('views', {noCache: true});  // point nunjucks to the proper directory for templates
// // nunjucks.render('index.html',function (err, output) {
// //     console.log(output);
// // });

// app.use(function (req, res, next) {
// 	// var volleyball = require('volleyball');
// 	// var theBall = volleyball();
//     // do your logging here
//     console.log(req.method, req.url,req.statusCode);
//     // console.log(Object.keys(req));
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//     next();
// })
// app.use('/special/', function(req,res,next){
// 	console.log('you reached the special area');
// 	next();
// })
// app.use(express.static('public')); 



// // app.get('/stylesheets/style.css', function(req,res){
// // 	res.sendFile('/Users/Klen/twitter-js/public/stylesheets/style.css');
// // })
// // app.get('/special/', function(req,res){
// // 	res.send('arent you special');
// // })
// // app.get('/', function (req, res) {
// // 	console.log('what a get!');
// //   res.render( 'index', {title: 'Leighs Favorite TV Characters', people: leighPeople});
// // });

// // app.get('/news', function (req, res) {
// // 	console.log('news get');
// //   res.send('Good morning, heres the news! And all the news is good!');
// // });
// // app.get('/tweet/5', function(req,res){
// // 	res.send('<h1>Our Very First Tweet!</h1>');
// // })


use strict';
var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var makesRouter = require('./routes');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests


// start the server
var server = app.listen(1337, function(){
  console.log('listening on port 1337');
});
var io = socketio.listen(server);

app.use(express.static(path.join(__dirname, '/public')));

// modular routing that uses io inside it
app.use('/', makesRouter(io));

// // manually-written static file middleware
// app.use(function(req, res, next){
//   var mimeType = mime.lookup(req.path);
//   fs.readFile('./public' + req.path, function(err, fileBuffer){
//     if (err) return next();
//     res.header('Content-Type', mimeType);
//     res.send(fileBuffer);
//   });
// });
