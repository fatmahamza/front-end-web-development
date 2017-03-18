// Figure out how to escape first

var num = 0;

while (num <= 10) {
	console.log(num);
	num++;
};




var userGuess = prompt('Guess the correct number from 0-10');
var computerChoice = 4;
var count = 5;

while (count > 0 && userGuess != computerChoice) {

	userGuess = prompt('Wrong. You have ' + count + ' more tries.');
	count--;
};

if (userGuess == computerChoice) {
	console.log('Correct!');
};