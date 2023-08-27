"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */
//first case
console.log('\n Here 1st version is used :');
let alien_color = 'green';
if (alien_color == 'green') {
    console.log('Great, you just earned 5 points.');
}
else {
    console.log('Great, you have earned 10 points');
}
//second case
console.log('\n Here 2nd version is used :');
let alien_colour = 'blue';
if (alien_colour == 'green') {
    console.log('Great, the player just earned 5 points.');
}
else {
    console.log('Great, you have earned 10 points');
}
