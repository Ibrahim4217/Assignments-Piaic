/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */


//step1

let Guest_List = [
    'Dwayne',
    'Oppenhiemer',
    'Andrew Tate', 
    'Kevin' , 
    'Mr.Beast', 
    'David Goggins',
    'Paul Walker'];


    console.log('I have space for only two guests.')

//step 2

   
while(Guest_List.length >2){

let removeguest = Guest_List.pop()
console.log(`Sorry, ${removeguest} we have noo space left`)

}

//step 3

for(let Guest of Guest_List){

    console.log(`Hello, ${Guest} you are still invited`)
}

//step 4 

Guest_List.pop()
Guest_List.pop()

//empty string

console.log(`Guest list after dinner: ${Guest_List}`)
