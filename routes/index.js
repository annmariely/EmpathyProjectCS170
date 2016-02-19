
/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('index', {});
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

exports.viewPlaying = function(req, res){
	res.render('playing', { 
		"players": [
			{
				"name": "Ann",
				"question": "I have been to Hawaii",
				'score': 2		
			},
			{
				"name": "Andrew",
				"question": "I have skateboarded",
				'score': 4	
			},
			{
				"name": "Devon",
				"question": "I have ridden a horse",
				'score': 1
			},
			{
				"name": "Dilraj",
				"question": "I have had a pet cat",
				'score': 0	
			}
		]
	});
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