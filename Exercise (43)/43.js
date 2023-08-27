"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["Merlin", "Gandalf", "Houdini", "Dumbledore"];
show_magicians(magicianNames);
function make_great(magicians) {
    const Great = magicians.map(magician => `the Great ${magician}`);
    return Great;
}
// modifies the array of magicians 
const greatmagicicans = make_great(magicianNames);
//calling function
console.log('The Magician:');
show_magicians(greatmagicicans);
console.log('\n The Great Magician:');
show_magicians(greatmagicicans);
