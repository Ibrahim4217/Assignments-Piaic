/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 

• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
                        
//step 1
                           
let Guest_List = ['Oppenhiemer', 'Andrew Tate', 'Mr.Beast', 'David Goggins'];
let guest_that_didnt_come = 'Oppenhiemer';
console.log(`${guest_that_didnt_come}, can't make it to dinner`);
//2) • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let new_guest = 'Khabib';
let indexof_guestthatdidntcome = Guest_List.indexOf(guest_that_didnt_come);
if (indexof_guestthatdidntcome !== -1) {
    Guest_List[indexof_guestthatdidntcome] = new_guest;
}
//console.log(Guest_List[0])
//3) Print a second set of invitation messages, one for each person who is still in your list.
console.log('second set of invitation messages :');
for (let Guest of Guest_List) {
    console.log(`Hello ${Guest} , we found a bigger dinner table.`);
}



//step 2


let Guest_1='Dwayne'
Guest_List.unshift(Guest_1)

console.log(Guest_List)

//step 3
let Guest_2='Kevin'

let middleindex : number = Math.floor(Guest_List.length/2) //this can also be used

//Guest_List.splice(2,0,Guest_2) 
Guest_List.splice(middleindex,0,Guest_2) 
console.log(Guest_List)

//step 4


let Guest_3 = 'Paul Walker'

Guest_List.push(Guest_3)
console.log(Guest_List)

//step 5

console.log('New set of invitation messages :');
for (let Guest of Guest_List) {
    console.log(`Dear ${Guest}, your are invited to the Dinner. Join us`)
}

export{Guest_List}