"use strict";
/* Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.
 */
function orderSandwich(...items) {
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("=====================");
}
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Chicken", "Bacon", "Avocado", "Ranch", "Onion");
