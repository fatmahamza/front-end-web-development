// Conditions

var userAge = prompt('What is your age?')

4 == '4'
4 === '4'

if (userAge >= 13) {
	console.log('Welcome!');
} else {
	console.log('gtfo');
};



// Check the user's name.  If it is your name, say 'Welcome.' If not, say
// 'This isn't your computer'


// What if you only want to perform the task when multiple conditions are true?

var userAge = prompt('What is your age?');
var userLocation = prompt('What country are you located in?');

if ((userAge < 13) || (userLocation !== 'USA')) {
	alert('You are either too young or you reside in a country where this game is unavailable.');
};


// If you want 2 alternative conditions, you can use the 'else' keyword in combination with 'if'.

var userAge = prompt('What is your age?');
console.log(userAge);

if (userAge < 13) {
	alert('You are too young to play this game.');
}
else {
	alert('Welcome to the game!');
};


// If you need more than 2 alternative conditions, you can use if/else chains.

var userAge = prompt('What is your age?');
console.log(userAge);

if (userAge < 13) {
	alert('You are too young to play this game.');
}
else if (userAge >= 13) {
	alert('Welcome to the game!');
}
else {
	alert('Your input must be a number');
};