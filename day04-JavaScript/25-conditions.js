// Conditional execution allows certain code statements to be executed only under certain conditions.

var userAge = prompt('What is your age?');

// By using the keyword 'if', the following code will only be executed if the condition within
// the parentheses evalueates as 'true'.
if (userAge < 13) {
	alert('You are too young to play this game.');
};

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