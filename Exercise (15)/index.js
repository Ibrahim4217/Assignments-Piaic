"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

 */
//1) Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
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
    console.log(`Respected ${Guest}, you are invited to dinner. Please join us`);
}
