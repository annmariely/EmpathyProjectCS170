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