// Accessing HTML elements is time consuming. We can save time and simplify it by creating 
// variables with values that access an HTML element.
var nameForm = document.getElementById('name-form');
var fname = document.getElementById('input-first-name');
var lname = document.getElementById('input-last-name');
var fullName = document.getElementById('p-full-name');

// This funciton is an "event listener". It listens for an event that the user creates.
// In this case, it's waiting for the user to 'submit' their inputs to the form.
nameForm.addEventListener('submit', function() {

	event.preventDefault(); //Prevents the page from reloading when submit button is clicked

	//I'm accessing the HTML elements by using the variables I had set earlier.
	fullName.innerHTML = 'Welcome, ' + fname.value + ' ' + lname.value + '.';

});