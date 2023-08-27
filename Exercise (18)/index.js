"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
//-------------------------------------------------------------------------------------------------------------------------------------------
//step 1
let fav_areas = ['Tokyo', 'Nairobi', 'Makkah', 'Lisbon', 'San Fransisco'];
//step2
console.log('Original order:');
console.log(fav_areas);
//step3
console.log('\n alphabetical order without modifying the actual list:');
console.log([...fav_areas].sort());
//step 4
console.log('\n array still in its original order:');
console.log(fav_areas);
//step 5
console.log('\n Reverse Alphabetically Array:');
console.log([...fav_areas].sort().reverse());
//step 6
console.log('Original order:');
console.log(fav_areas);
//step 7
console.log('\n Reverse order:');
fav_areas.reverse();
console.log(fav_areas);
//step 8
console.log('\n Original order:');
fav_areas.reverse();
console.log(fav_areas);
//step 9
console.log('\n To Reverse Alphabetically order:');
fav_areas.sort();
console.log(fav_areas);
//step 10
console.log('\n To Alphabetically order');
fav_areas.sort().reverse();
console.log(fav_areas);
