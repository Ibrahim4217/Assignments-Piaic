"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.

 */
//non empty aray
let username = ['Admin', 'Eric', 'John', 'Wick', 'Ethany', 'Ali'];
//function case
function greet(username) {
    if (username.length === 0) {
        console.log('We need some users!');
        return;
    }
    for (const i in username) {
        if (username[i].toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username[i]}, thank you for logging in again.`);
        }
    }
}
console.log('\n \n Non Empty users:\n');
greet(username);
//for empty array
username = [];
console.log('\n Empty user: \n');
greet(username);
