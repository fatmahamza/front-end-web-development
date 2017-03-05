// We've learned about how to use JS to perform a task. For example:

3 > 4 //will print false

alert('Your\'re Amazon Prime trial is about to expire');


// REVIEW OF 'IF' STATEMENTS

/* 
   But what if you want to perform a task only if a certain
   condition is met?  That's what 'if' statements are for.

   Example: Let's say you downloaded a trial of some software. The trial
   allows you to only use the software for 10 minutes. Such programs will
   have a session counter running in the background. The session counter
   will start at 0 and will increment after every minute. 
*/

var sessionCounter = 0;

// in the below statement, line 25 will only run if the comparison in the
// parentheses evaluates to 'true'.
if (sessionCounter === 10) {
	alert('Your session is has expired!');
};


// REVIEW OF 'IF-ELSE' STATEMENTS

/*
	There may also be situations where you want to perform a task if the
	condition is met BUT perform a different task if it is not met.

	Example: A user must be at least 18 to watch your video. If he isn't
	18, you want to tell him to leave the page.
*/

// value of userAge will equal whatever the user types and will be string
var userAge = prompt('What is your age?');

if (userAge >= 18) {
	alert('Welcome!');
} else {
	alert('Come back when you\'re 18.');
};


// SYNTAX OF IF AND IF-ELSE STATEMENTS

//if
if (true) {
	//perform this task;
};

//if-else
if (true) {
	//perform this task;
} else {
	//otherwise perform this task;
};


if (userResponse === false) {
  // some task
}
var userAge = prompt('What is your age?');

if (userAge >= 18) {
	alert('Welcome!');
} else if (userAge === '') {
	userAge = prompt('You didnt type anything. Enter your age.');
} else {
	alert('Come back when you\'re 18.');
};


// If statement
if (true) {
	// some task
};


// If-else statements
if (true) {
	//some task;
} else {
	//some other task;
};

// If-else-if statements
if (false) {
	//some task;
} else if (false) {
	//some other task;
} else if (true) {
	//some other other task;
} else {
	//some other other other task;
};