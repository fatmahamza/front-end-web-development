var nameForm = document.getElementById('name-form');
var fname = document.getElementById('input-first-name');
var lname = document.getElementById('input-last-name');
var fullName = document.getElementById('p-full-name');

nameForm.addEventListener('submit', function() {

	event.preventDefault(); //Prevents the page from reloading

	fullName.innerHTML = 'Welcome, ' + fname.value + ' ' + lname.value + '.';

});