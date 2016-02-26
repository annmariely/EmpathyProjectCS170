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
		'qs': 'Ann has never pulled an all-nighter'
	},
	{
		'qs': 'Devon has never shaved her head'
	},
	{
		'qs': 'Andrew has never been to NYC'
	},
	{
		'qs': 'Dilraj has never worn socks'
	},
	{
		'qs': 'Ann has never eaten fish'
	},
	{
		'qs': 'Devon has never been to UCLA'
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

var scores = {
	'Ann': 3,
	'Andrew': 3, 
	'Devon': 3,
	'Dilraj': 3,
};

var yourscore = 3;

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

	$('#post1btn').click(function(){

		var input = $('#post1input').val();
		
		if(input === "" || input === "undefined") return;
		console.log(input);
		
		$('#post1').remove();
		
		/*var $template = $('#neverHave-questionCard').html();
		var template = Handlebars.compile($template);
		var data = {};
		data['test'] = input;
		var output = template(data);*/

		//$('.page-content').append(input);

		updateScores();
		playAI();
	});

	$('body').on('click','#usersTurn-btn', function(){

		var input = $('#post1input').val();
		if(input === "" || input === "undefined") return;

		counter++;
		$(this).closest('.mdl-grid').remove();
		updateScores();
		playAI();
	});

	$('body').on('click','#answer', function(){
		counter++;
		$(this).closest('.mdl-grid').remove();

		if($(this).hasClass('have')) {
			
			if(yourscore > 0) {
				yourscore = yourscore - 1;
				$("#yourscore").html( yourscore );
			}
		}

		updateScores();
		playAI();
	});
}

function updateScores() {

	for(var player in scores) {
		if(scores[player] > 0) {
			scores[player] = scores[player]-Math.round(Math.random());
			$("#"+player+"score").html(scores[player]);
		}
	}
	checkWinner();
};

function checkWinner() {
	var aboveZero = 0;

	for(var player in scores) {
		if(scores[player] > 0) {
			aboveZero++;
		}
	}

	if(yourscore > 0) {
		aboveZero++;
	}

	// one person wins
	if(aboveZero == 1) {
		for(var player in scores) {
			if(scores[player] > 0) {
				displayMessageCard(player + ' won!');
			}
		}
		
		if(yourscore > 0) {
			displayMessageCard('You won!');
		}
	}

	// no one won
	if(aboveZero == 0) {
		displayMessageCard('Tie!');
	}

	if(aboveZero < 2) {
		counter = -1;
	}

};

function playAI() {
	console.log('AI');

	if(questions[counter]) {
		if(counter !== 0 && counter % 4 === 0) {
			usersTurn();
		} else {
			displayCard(questions[counter].qs);
		}
	}
	//counter++;
}

function usersTurn() {
	var $card = $('#usersTurnTemplate').clone();
	$card.removeAttr('id');
	$('#gameCards').prepend($card);
	$card.show();
}

function displayCard(text) {
	var $card = $('#template').clone();
	$card.removeAttr('id');
	$card.find('#text').html(text);
	$('#gameCards').prepend($card);
	$card.show();
}

function displayMessageCard(text) {

	var $card = $('#message_template').clone();
	$card.removeAttr('id');
	$card.find('#text').html(text);
	$('#gameCards').prepend($card);
	$card.show();
}