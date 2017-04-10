/* 
All of our Angular code is inside a module called 'Note' which we can bind to any part
of our HTML. We have binded it to the <html> element. 
*/

// To simplify our code and make it more readable, we'll assign the module to a variable
// called app.
var app = angular.module('Note',[]);

// We're also creating a noteController with functionality to use inside a specified
// HTML element. Angular has a controller function that takes two parameters - a string
// and a function.
app.controller('noteController', function($scope) {

	$scope.notes = [{
	'title': 'Build a note app',
	// 'done': false
	}];

});