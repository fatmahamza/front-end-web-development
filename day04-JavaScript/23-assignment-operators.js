// You already know one assignment operator - the equal sign (=). Other assignment operators are 
// used to change the value of an existing variable.

=
+=
-=
*=
/=
%=

// When do we use them?

// Let's say your salary is increasing by $500
var salary = 90000;

salary += 500; 
// this is the same as writing:
// salary = salary + 500


// You're buying an orange worth $2, three apples worth $4, and two loaves of bread for $3.
var groceryExpense = 0;

groceryExpense += 2;
console.log(groceryExpense);
groceryExpense += 4 * 3;
console.log(groceryExpense);
groceryExpense += 3 * 2;
console.log(groceryExpense);

// What if you have to put back one loaf of bread?
groceryExpense -= 3;
console.log(groceryExpense);