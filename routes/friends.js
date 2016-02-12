exports.viewFriends = function(req, res){
	res.render('friends', {
		'friends': [
			{ 
				'name': 'Ann Marie',
				'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mutua_Madrid_Open_2015.jpg/220px-Mutua_Madrid_Open_2015.jpg"
				'explanation': 'Learn New words and phrases while kicking your friends asses'
			},
			{ 
				'name': 'Devon Sherwood',
				'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Carrie_Underwood_2%2C_2012.jpg/800px-Carrie_Underwood_2%2C_2012.jpg"
				'explanation': 'Learn New words and phrases while kicking your friends asses'
			},
			{ 
				'name': 'Dilraj Singh',
				'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/629px-Kobe_Bryant_2014.jpg"
				'explanation': 'Learn New words and phrases while kicking your friends asses'
			},

		]  
	});
};