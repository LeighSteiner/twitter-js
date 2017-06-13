const _ = require('lodash');
const data = [];

function add (name, content) {
  data.push({ name: name, content: content, foo: "https://pbs.twimg.com/profile_images/2450268678/olxp11gnt09no2y2wpsh_normal.jpeg"});
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}


module.exports = {
	add : add, 
	list : list, 
	find : find
};

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
add('Kelaiya', 'i was absent yesterday :(');
add('Leigh', 'nodemon is the greatest!');
add('Leigh', 'my secret to looking youthful is hiding from the sun!');
add('Kelaiya', 'i like javascript!');
var capture = find({name: 'Kelaiya'});
console.log(capture);













