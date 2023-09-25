Ne.log("Hello world!");

let a=55
let b=null
let c=true
const d="Kiran"
let e=BigInt
let f=Symbol
let g=undefined
console.log(a,b,c,d,e,f,g)


let n=prompt("enter a number..")
for(let i=0; i<n ; i++){
    console.log(i)  
}
*/
const prompt= require('prompt-sync')();
 let age=prompt("Enter your age")
 age = Number.parseInt(age)
 if(age>=18){
    console.log("you are "+age + " years old");
 }
 else {
    console.log("you are less than "+age);
 }
 

