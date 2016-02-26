
/*
 * GET home page.
 */

exports.viewSplash = function(req, res){
	res.render('splash', {});
};

exports.viewHome = function(req, res){
	res.render('index', {
		'home': [
			{ 
				'name': 'Play with Andrew',
				'explanation': 'It has been 5 months since you last played Andrew...'
			},
			{ 
				'name': 'Devon is beating Dilraj in Cards against Humanity',
				'explanation': 'Devon has beat Dilraj 4/5 games.'
			},
			{ 
				'name': 'Play with Ann Marie',
				'explanation': 'It has been 1 month since you last played Never Have I Ever...'
			},

		]  
	});
};

exports.viewFriends = function(req, res){
	res.render('friends', {
		'friends': [
			{ 
				'name': 'Ann Marie',
				'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mutua_Madrid_Open_2015.jpg/220px-Mutua_Madrid_Open_2015.jpg",
				'explanation': 'Learn New words and phrases while kicking your friends asses'
			},
			{ 
				'name': 'Devon Sherwood',
				'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Carrie_Underwood_2%2C_2012.jpg/800px-Carrie_Underwood_2%2C_2012.jpg",
				'explanation': 'Learn New words and phrases while kicking your friends asses',
			},
			{ 
				'name': 'Dilraj Singh',
				'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/629px-Kobe_Bryant_2014.jpg",
				'explanation': 'Learn New words and phrases while kicking your friends asses'
			},

		]  
	});
};

exports.viewLogin = function(req, res){
res.render('login', { });
};


/*
 * GET home page.
 */
var players = {
	"players": [
		{
			"name": "Ann",
		},
		{
			"name": "Andrew",
		},
		{
			"name": "Devon",
		},
		{
			"name": "Dilraj",
		}
	]
};

exports.viewPlaying = function(req, res){
	res.render('playing1', players);
};

exports.viewPlaying1 = function(req, res){
	res.render('playing1', players);
};

exports.viewPlaying2 = function(req, res){
	res.render('playing2', players);
};


exports.viewProfile = function(req, res){
	res.render('profile', { });
};

exports.viewGames = function(req, res){
	res.render('games', {
		'games': [
			{ 
				'name': 'Words with Friends',
				'explanation': 'Learn New words and phrases while kicking your friends asses'
			},
			{ 
				'name': 'Never have I ever',
				'explanation': 'Learn New words and phrases while kicking your friends asses'
			},
			{ 
				'name': 'Cards against Humanity',
				'explanation': 'Learn New words and phrases while kicking your friends asses'
			},

		]  
	});
};