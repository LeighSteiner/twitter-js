const express = require( 'express' );
const app = express();
app.listen(3000, function(){
	console.log('listening on port 3000…');
});
// Kelaiya is here yay!!

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
  res.send('Welcome to my TwitterClone!')
});

app.get('/news', function (req, res) {
	console.log('news get');
  res.send('Good morning, heres the news! And all the news is good!');
});

