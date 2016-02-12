
/*
 * GET home page.
 */

exports.viewPlaying = function(req, res){
	res.render('playing', { 
		"players": [
			{
				"name": "Ann Marie",
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
