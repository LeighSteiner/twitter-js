const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm : true } );
});
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {'name': name} );
  // console.log('name', name, 'list', list);
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req,res){
	var id = req.params.id;
	id = parseInt(id);
	var tweet = tweetBank.find({'id': id});
	
	res.render('index', {tweets: tweet});
})
module.exports = router;

