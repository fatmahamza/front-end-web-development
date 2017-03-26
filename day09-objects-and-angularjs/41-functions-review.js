// A function without parameters
function pirateGreeting() {
	console.log('Shiver me timbers! It be Captain Blackbeard!');
};

pirateGreeting();

// A function with one parameter
function circleArea(radius) {
	return 3.14 * radius * radius
};

var circle1 = circleArea(5);
var circle2 = circleArea(10);

// A function with two parameters
function rectangleArea(length, width) {
	return length * width;
};

var rect1 = rectangleArea(5, 10);
var rect2 = rectangleArea(7, 3);



// Scope

var legendarySinger = 'Johnny Cash'; //Variable with global scope

function greet() {
	console.log('Hello, ' + legendarySinger);
};

greet();


function greet2() {
	var legendaryGuitarist = 'Jimi Hendrix' //local variable
	console.log('Hello, ' + legendaryGuitarist);
};
greet2();