"use strict";
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */
// to lowercase ;
function greet(name) {
    console.log('HELLO ,' + name.toLocaleLowerCase() + ' !!');
}
greet("IBRAHIM");
// to uppercase ;
let func = (name1) => name1.toUpperCase();
let a = func('ibrahim');
console.log(a);
//to titlecase 
let personname = 'Muhammad Ibrahim qureshi';
let words = personname.split(" ");
let titlecase = "";
for (let i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecase);
