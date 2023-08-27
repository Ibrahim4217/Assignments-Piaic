"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Made a ${size}-sized shirt with the message: "${message}"`);
    return;
}
// Creating different shirts
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message
make_shirt("Small", "Custom message"); // Custom-sized shirt with custom message
