// We've covered 'if' statements and 'if-else' statements for when you want
// to perform a different task if the condition is false. What if you need
// multiple conditions? You can use if-else-if chains.


// This takes the if-else example from lesson 26B a step further. If the
// user leaves the prompt blank, it informs the user that they must input
// a number.

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