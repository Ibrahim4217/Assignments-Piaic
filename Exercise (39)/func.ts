/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */


function city_country(country:string,city:string){
    return`${city},${country}`
}

// Calling the function with different city-country pairs

let city_country1=city_country('Paris','France')

let city_country2=city_country('Tokyo','Japan')

let city_country3=city_country('Lahore','Pakistan')

console.log(city_country1);
console.log(city_country2);
console.log(city_country3);


