'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

	$('#post1btn').click(function(){

		var input = $('#post1input').val();
		
		console.log(input);
		
		$('#post1').hide();
		
		/*var $template = $('#neverHave-questionCard').html();
		var template = Handlebars.compile($template);
		var data = {};
		data['test'] = input;
		var output = template(data);*/

		$('.page-content').append(input);

		playAI();
	});
}

function playAI() {
	console.log('AI');
}