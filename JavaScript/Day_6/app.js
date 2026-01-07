// // Questions
// // write a function sayHello() that prints "Hello js"

// function sayHello(){
//     console.log("hello js")
// }
// sayHello()

// // create a function add(a,b) that returns their sum and log the result

// let sum=(a,b)=>{
//     return a+b
// }

// console.log(sum(2,4))

// // write a function with a default parameter name="Guest" that prints "Hi <name>"

// function fun(name="Guest"){
//     console.log(`Hi ${name}`)
// }
// fun()

// // use rest parameter to make a function that unlimited numbers.

// function add(...a){
//     let sum=0
//     a.forEach(function(val){
//        sum+=val
//     })
//     console.log(sum)
// }
// add(1,2,3,4,4,5,6,7,7,8)
// console.log(sm)

// function addUnlimited(...nums){
//     let ans=nums.reduce(function(acc,val){
//         return acc+val;
//     },0);
//     console.log(ans);
// }

// addUnlimited(1,2,3);

// // create an IIFE(immediatly invoked function expression) that prints "I run instantly"

// (function(){
//     console.log("I run instantly")
// })();

// // make a nested function where the inner one prints a variable from the outer one.
// function outer(){
//     let x=12
//    function inner(){
//      console.log(x);
//    }
//    inner()
// }

// outer()

// // create a array of 5 fruits . add one at the end and remove one from the beginning.
// let arr=[1,2,3,4,5,6]
// arr.push(19)
// arr.shift()

// // use a for loop to print all elements of an arar.

// let ab=[1,2,3,4,5,5,6,77,7]

// ab.forEach(element => {
//     console.log(element)
// });

// // create an object person with keys name, age , and city,and print each key's value.

let person={
    name:"mahboob",
    age:22,
    city:"begusarai"
}
// console.log(Object.values(person));
for (let key in person) {
    console.log(person[key]);
}

// use setTimeout() to log "Time's up" after 2 seconds.

setTimeout(function() {
    console.log("Time's up")
}, 2000);


