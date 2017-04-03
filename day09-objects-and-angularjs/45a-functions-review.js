// A function without parameters
function greet() {
	console.log('Hello');
};

greet();  // Invoking the function


// A function with one parameter
var username = 'TonyStark';

function greet2(user) {
	console.log('Hello, ' + user);
};

greet2(username); // Invoking the function


// A function with two parameters
function rectangleArea(l, w) {
	console.log(l * w);
};

rectangleArea(5, 2); // Invoking the function



// We can also use a function to retrieve object information
// We'll begin by creating an object and then create a function that greets the
// user depending on the user's age.

var amy = {
	age: 17,
	height: '5 feet 9 inches',
	hairColor: 'black'
};

function programmingGreet(usersage) {
	if (usersage.age < 20) {
		console.log('Good job starting programming so early!');
	} else {
		console.log('Welcome to programming!');
	};
};

programmingGreet(amy);
