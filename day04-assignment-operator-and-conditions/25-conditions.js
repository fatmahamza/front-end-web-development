// Conditional execution allows certain code statements to be executed only under certain conditions.


// Let's say you only want a user to be able to play a game if they're at least age 13
var userAge = prompt('What is your age?');

// By using the keyword 'if', the following code will only be executed if the condition 
//within the parentheses evalueates as 'true'.

if (userAge < 13) { 
	console.log('You are too young to play this game.');
};


// What if you want to perform a different task if the first condition is false?

if (userAge >= 13) {
	console.log('Welcome to the game!');
} else {
	console.log('This game is too violent for you!')
}


// Create a program to stop someone with the wrong name from accessing a computer.
// Prompt a user for their name.  If the user's name is equal to yours, console.log() a
// response welcoming them.  Otherwise, tell them to go away.

var userName = prompt('What is your name?');

if (userName === 'Farhad') {
	console.log('Welcome!');
} else {
	console.log('This isn\'t your computer. You may not enter.')
}