// Array Methods
let num=[1,2,3,45]
console.log(num);
let b=num.toString()          //toString method
console.log(b,typeof b);
let c=num.join("_")           //join method
console.log(c,typeof c);
let d=num.pop()               // pop returns the popped element
console.log(num, d);
let e =num.push(88)           // push returns the new array
console.log(num, e);
let f =num.shift()            // Removes an element from the start of the array
console.log(num, f);
let g =num.unshift(66)        // Removes an element from start of the array
console.log(num, g);

//  More array methods



// let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num1.length)
// delete num1[0]
// console.log(num1.length)

// let newArray = num1.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num1, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num1.sort(compare)
// num1.reverse()
// console.log(num)

// Splice and Slice
let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num1.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num1)
// console.log(deletedValues)

// let newNum = num1.slice(3)
let newNum = num1.slice(3, 5)
console.log(newNum)