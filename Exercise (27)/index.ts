/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */


//step 1


console.log('\n First version')
let alien_color:string= 'green'

if(alien_color=='green'){


console.log('Great, you just earned 5 points.' )

} 

else if(alien_color=='yellow') {

console.log('Great, you have earned 10 points')

}

else if (alien_color=='red'){

console.log('Great, you have earned 15 points');


}

// step 2

console.log('\n Second version')

alien_color= 'yellow'

if(alien_color=='green'){


console.log('Great, you just earned 5 points.' )

} 

else if(alien_color=='yellow') {

console.log('Great, you have earned 10 points')

}

else if (alien_color=='red'){

console.log('Great, you have earned 15 points');


}

console.log('\n Third version')
alien_color= 'red'

if(alien_color=='green'){


console.log('Great, you just earned 5 points.' )

} 

else if(alien_color=='yellow') {

console.log('Great, you have earned 10 points')

}

else if (alien_color=='red'){

console.log('Great, you have earned 15 points');


}
else {'invalid color'}

