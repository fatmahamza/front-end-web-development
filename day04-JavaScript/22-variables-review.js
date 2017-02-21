// Variables are used to save data by assigning values to a variable. Variables must begin with
// a number or letter and cannot contain special characters except for _.


//Declaring a variable without defining it.
var somethingUnassigned;

//Declaring a variable and assigning a value.
var fullName = 'Lord Voldemort';

//Declaring multiple variables in the same line.
var fname = 'Hermione', lname = 'Granger';


//Using variables to handle an equation to find net salary and monthly net salary from annual salary
var grossIncome, tax, netSalary, monthlyNetSalary;

//Find net salary
grossIncome = 75000;
tax = grossIncome * 0.25;
netSalary = grossIncome - tax;

console.log(netSalary);

//Find monthly net salary
monthlyNetSalary = netSalary / 12;

console.log(monthlyNetSalary);


// Resolve this simple math problem using variables:

// Martha went to the store 9 times last month. She buys 2 erasers each time she goes to the 
// store. How many erasers did Martha buy last month?