"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
//step 1
let pname = 'Halal';
let fname = 'haram';
console.log('Tests for equality and inequality with strings :');
console.log(pname == fname);
console.log(pname != fname);
//step2
let name1 = 'AUSTRALIA';
let name2 = 'australia';
console.log(name1.toLocaleLowerCase() == name2);
//step3
let num1 = 15;
let num2 = 70;
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 === num2);
//step4
let x = 13;
let y = 23;
let z = 14;
console.log(x < y && y < z);
console.log(x < y && y > z);
console.log(x > y || y < z);
console.log(x < y || y > z);
//step 5
const fruit = ['apple', 'guava', 'banana', 'mango', 'tangerine', 'kiwi'];
console.log(fruit.includes('apple'));
console.log(fruit.includes('grape'));
