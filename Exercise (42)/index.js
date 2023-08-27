"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified. */
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
