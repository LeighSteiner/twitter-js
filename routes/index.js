const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {'name': name} );
  // console.log('name', name, 'list', list);
  res.render( 'index', { tweets: list } );
});
module.exports = router;

