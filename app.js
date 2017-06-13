const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks')
app.listen(3000, function(){
	console.log('listening on port 3000…');
});
// Kelaiya is here yay!!
var locals = {
    title: 'Classmates',
    people: [
        { name: 'Emily'},
        { name: 'Danni' },
        { name: 'Omri'}
    ]
};
const people = [{name: 'Your Majesty'}, {name: 'Hannah Baker'}, {name: 'Clay'}];
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});  // point nunjucks to the proper directory for templates
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.use(function (req, res, next) {
	// var volleyball = require('volleyball');
	// var theBall = volleyball();
    // do your logging here
    console.log(req.method, req.url,req.statusCode);
    // console.log(Object.keys(req));
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
})
app.use('/special/', function(req,res,next){
	console.log('you reached the special area');
	next();
})
app.get('/special/', function(req,res){
	res.send('arent you special');
})
app.get('/', function (req, res) {
	console.log('what a get!');
  res.render( 'index', {title: 'Kelaiyas Favorite TV Characters', people: people});
});

app.get('/news', function (req, res) {
	console.log('news get');
  res.send('Good morning, heres the news! And all the news is good!');
});

