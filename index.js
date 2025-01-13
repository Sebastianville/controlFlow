//part 1

const PI = 3.1415
const radius = 5; 
const area = PI * radius * radius 

const space = 0.8; 
const max = area/ space 
console.log(max)

let beginningPlants = 20; 

let week1 = beginningPlants * 2
let week2 = week1 * 2
let week3 = week2 * 2

console.log(`week 1 is ${week1}`)
console.log(`week 2 is ${week2}`)
console.log(`week 3 is ${week3}`)


//week 1
if (week1 > 0.8 * max){
    console.log('Exceeding the capacity: Pruned the plants (week1)')
} else if ( week1 >=  0.5 * max) {
    console.log('Continue montiring (week1)')
} else {
    console.log('There is room to plan more plants (week1)')
}

//week 2
if (week2 > 0.8 * max){
    console.log('Exceeding the capacity: Pruned the plants (week2)')
} else if ( week2 >= 0.5 * max) {
    console.log('Continue montiring (week2)')
} else {
    console.log('There is room to plan more plants (week2)')
}

//wwek 3
if (week3 > 0.8 * max){
    console.log('Exceeding the capacity: Pruned the plants (week3)')
} else if ( week3 >= 0.5 * max) {
    console.log('Continue montiring (week3)')
} else {
    console.log('There is room to plan more plants (week3)')
}




// part 2

//Start with a new number
let newBeginningPlants = 100 

//reaching to week 10 by using an exponent 
let week10 = 100 * (2 ** 10)

console.log(week10)

//the new area needed to not prune which is why we bring the space variaable in here
let newArea =  week10 * space

//Finding the new radius 
let newRadius = Math.sqrt(newArea / PI)

console.log(newRadius)

// part 3

try {
    if (newArea > area) {
        throw new Error(`The garden is too small. We need ${newArea} square meters`)
    }
} catch (error) {
    console.log('Error: ', error)
}
