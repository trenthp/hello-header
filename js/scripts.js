// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	// returns 0 to 'limit'
	var limit = 2;
	var numRand = Math.floor(Math.random()*limit);
	var msg0 = 'hello!';
	var msg1 = 'hola!';
	var msg2 = 'bon dia!';

	$('h1').text(msg+numRand);



	console.log(numRand);

}); 
