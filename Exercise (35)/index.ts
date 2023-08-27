/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 

• Modify your4 program to print a statement about each animal, such as A dog would make a great pet. 

• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */


const animals:string[] =['Cheetah','Jaguar','Lion','Tiger']
for(const animal of animals){

    

if(animal=='Cheetah'){

console.log(`${animal} are wild animals that cannot be tamed.`);


}

else if (animal === 'Jaguar'){


    console.log(`${animal} are the only big cat in the Americas`);
    
}

else if (animal === 'Lion'){


    console.log(`${animal} is the king of jungle`);
    
}

else{


    console.log(`${animal} are powerful than lion`);
    
}


}

console.log('Common Things: "They are all Carnivores"')