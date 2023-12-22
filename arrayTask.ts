// // my array 
// //Arrays:
// let array1: number[] = [5, 6, 7]; //correct syntax
// console.log(array1[1]); //correct syntax

// let array2: Array<number | string> = [1, 2, 3, "wania"]; //alternative correct syntax

// let array3: number[] = []; //correct syntax to define an empty array

// // let array4: number[] = new number[2];//error

// //methods
// let array5: number[] = [];
// array5.push(1234); //dynamically adding

// using push in Array

let arrpush: number[] = [1,2,3,4]
console.log("\n----------------------------------------")

console.log(arrpush)

arrpush.push(6)

console.log("\n********* Using push in array ********")

console.log(arrpush)

console.log("\n----------------------------------------")


// using push in Array

let arrpop: number[] = [1,2,3,4]


console.log(arrpop)

arrpop.pop()

console.log("\n********* Using pop in array ********")

console.log(arrpop)

console.log("\n----------------------------------------")

// using unshift in Array

let arrunshift: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


console.log(arrunshift)

arrunshift.unshift(0)

console.log("\n********* Using unshift in array ********")

console.log(arrunshift)

console.log("\n----------------------------------------")

// using shift in Array

let arrshift: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


console.log(arrshift)

arrshift.shift()

console.log("\n********* Using shift in array ********")

console.log(arrshift)

console.log("\n----------------------------------------")

// using join in Array

let arrayA: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let arrayB: string[] = ["hello","world","my","name","is","Hammad","Ahmed"]
console.log("arrayA:")
console.log(arrayA)
console.log("arrayB:")
console.log(arrayB)

let arrjoin = arrayA.join("-")

let arrjoin1 = arrayB.join(" ")

console.log("\n********* Using join in array ********")

console.log("arrayA:")
console.log(arrjoin)

console.log("arrayB:")
console.log(arrjoin1)

console.log("\n----------------------------------------")

// using slice in Array
// (method) Array<number>.slice(start?: number | undefined, end?: number | undefined): number[]

let array0: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


console.log(array0)

let arrslice=array0.slice(1,5)

console.log("\n********* Using slice in array ********")

console.log(arrslice)

console.log("\n----------------------------------------")

// using splice in Array
// splice(start: number, deleteCount?: number | undefined): number[]

let array: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log("splice(start: number, deleteCount?: number | undefined): number[]")

console.log(array)

let arrsplice=array.splice(11,3,666)

console.log("\n********* Using splice in array ********")

console.log(array)
console.log(arrsplice)

console.log("\n----------------------------------------")


// by Hammad Ahmed
