const express = require( 'express' );
const app = express();
app.listen(3000, function(){
	console.log('listening on port 3000…');
});

app.get('/', function (req, res) {
	console.log('what a get!');
  res.send('Welcome to my TwitterClone!')
})