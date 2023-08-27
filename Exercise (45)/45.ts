/* Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. #
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly.
 */

 function createCar(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
  const carInfo: Record<string, any> = {
    manufacturer: manufacturer,
    model: model,
    ...options.reduce((acc, option) => ({ ...acc, ...option }), {})
  };

  return carInfo;
}

const car = createCar("Toyota", "Camry", { color: "blue" }, { features: ["Navigation", "Sunroof"] });

console.log(car);
