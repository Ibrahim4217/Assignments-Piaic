/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
 If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted */


const current_users: string[] = ["John", "Bob", "Charlie", "David", "Eve"];
const new_users: string[] = ["Eve", "Frank", "Grace", "Henry", "John"];

for (const newUsername of new_users) {

    const lowerCaseNewUsername = newUsername.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const isUsernameTaken = current_users.some(username => username.toLowerCase()===lowerCaseNewUsername );

    
    if (isUsernameTaken) {
        console.log(`Username '${newUsername}' is not available. Please choose a different username.`);
    } else {
        console.log(`Username '${newUsername}' is available.`);
    }
}
