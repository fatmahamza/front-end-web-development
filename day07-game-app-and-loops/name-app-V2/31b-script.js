(function () {

 	var nameForm = document.getElementById('name-form');
 	var fname = document.getElementById('first-name');
 	var lname = document.getElementById('last-name');

 	nameForm.addEventListener('submit', function() {
 		event.preventDefault(); //Prevent the page from reloading on form submit

 		if (fname.value === '' || lname.value === '') {
 			document.getElementById('full-name').innerHTML = 'You need to write your name.';
 		}
 		else {
 			document.getElementById('full-name').innerHTML = 'Welcome, ' + fname.value + ' ' + 
 			lname.value + '.';
 		};

 		fname.value = '';
 		lname.value = '';
 	});

})();