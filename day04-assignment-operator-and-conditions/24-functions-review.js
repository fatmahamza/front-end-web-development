// Functions are a block of code meant to perform a specific task.  The point 
//of a function is that you can call it by name in order to perform that 
//same task repeatedly. The within the parenthesis is called an argument.  
//Here are examples of functions:

alert('Warning!');
//In this statement we are "calling" or "invoking" the alert function and 
//"passing" "'Warning!'" as an argument.

console.log('some text');
//The console.log() function logs data in the JavaScript console of a browser.

confirm('Would you like to continue watching Netflix?'); //Returns true or false values

prompt('Select a username.'); //Prompt is used to ask the user for input.

// If you assign the value of a prompt to variable, the variable will retain the value of
// whatever input the user provides.  For example:

var fullName = prompt('What is your name?');
// The variable fullName will contain the value of whatever input the user provides.


// Variables can be used anywhere. Including within functions.

alert('Hello, ' + fullName + '!');