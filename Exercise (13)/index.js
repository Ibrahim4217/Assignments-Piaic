"use strict";
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

 */
let fav_transportation = [];
fav_transportation.push(["Motorcycle", "Kawasaki"]);
fav_transportation.push(["Car", 'Mustang']);
fav_transportation.push(["Cycle", 'Sohrab']);
fav_transportation.forEach(([transport, brand]) => console.log(`I would like to own a ${brand} ${transport}`));
