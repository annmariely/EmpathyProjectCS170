'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

var counter = 0;

var questions = [
	{
		'qs': 'Andrew has never Shot a gun',
	},
	{
		'qs': 'Ann has never enjoyed one of Justin Bieber&#39;s songs.',
	},
	{
		'qs': 'Devon has never sang in the shower.'
	},
	{
		'qs': 'Dilraj has never sang in the shower.'
	},
	{
		'qs': 'Ann pulled an all-nighter'
	},
];

var players = [
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
];

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

	$('#post1btn').click(function(){

		var input = $('#post1input').val();
		
		if(input === "" || input === "undefined") return;
		console.log(input);
		
		$('#post1').hide();
		
		/*var $template = $('#neverHave-questionCard').html();
		var template = Handlebars.compile($template);
		var data = {};
		data['test'] = input;
		var output = template(data);*/

		//$('.page-content').append(input);

		playAI();
	});

	$('body').on('click','#answer', function(){
		//counter++;
		$(this).closest('.mdl-grid').remove();
		updateScores();
		playAI();
	});
}

function updateScores() {
	for(var i = 0; i < players.length; i++) {
		var id = players[i].name;
		var score = $("#"+id+"score").html();
		$("#"+id+"score").html( parseInt(score)-Math.round(Math.random()) );
	}
};

function playAI() {
	console.log('AI');

	if(questions[counter]) {
		displayCard(questions[counter].qs);
	}
	counter++;
}


function displayCard(text) {
	var $card = $('#template').clone();
	$card.removeAttr('id');
	$card.find('#text').html(text);
	$('#gameCards').prepend($card);
	$card.show();
}