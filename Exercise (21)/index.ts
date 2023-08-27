/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items */

const car ={

name :'Supra' ,
company: 'Toyota',
price_RS: 15301600

}

//array object

let car2 : Array<typeof car> = []

// by pushing

car2.push(car)
car2.push({name :'r35'  ,
company: 'GTR',
price_RS: 41374000})

let car3 ={

    name :'Ford' ,
    company: 'Mustang',
    price_RS: 40000000

}
car2.push(car3)

console.log (car2)


//function to display cars
function displaycars(car2:Array<typeof car>){
for(let i of car2){

console.log(`Company: ${i.company}
Car: ${i.name}
Price: ${i.price_RS}
____________\n`)

}

}
displaycars(car2)