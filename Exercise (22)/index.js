"use strict";
/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
 Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

 */
//create index error ;)
function mycars(name, colour, model) {
    return {
        name,
        colour,
        model
    };
}
let cars = [
    mycars('Toyota Supra', 'White', 2011),
    mycars('Mitsubishi rx7', 'Orange', 2007),
    mycars('Nissan Gtr', 'blue', 2001),
    mycars('Buggati CHeron', 'black', 2020),
    mycars('American Muscle', 'Black', 2016)
];
const inv_index = 9; //there are only 5 elements in the array and they will create an array
console.log(`Car at index ${inv_index}: `, cars[inv_index]);
// Print the cars
cars.forEach((car) => {
    console.log(`Name:${car.name} ,Colour:${car.colour} ,Model:${car.model}`);
});
