// Variables are used to save data by assigning values to a variable. Variables must begin with
// a number or letter and cannot contain special characters except for _.


//Declaring a variable without defining it.
var somethingUnassigned;

//Declaring a variable and assigning a value.
var fullName = 'Lord Voldemort';

//Declaring multiple variables in the same line.
var fname = 'Hermione', lname = 'Granger';
var item1, item2, item3;


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


// Martha went to the store 9 times.  She buys 2 erasers each time she goes to the store.
// After her 9 visits, she had to return half of her erasers.  How many erasers does
// Martha have?

var storeVisits, currentErasers;

storeVisits = 9;
currentErasers = (storeVisits * 2) / 2;