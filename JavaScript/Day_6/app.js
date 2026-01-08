// Questions
// write a function sayHello() that prints "Hello js"

function sayHello(){
    console.log("hello js")
}
sayHello()

// create a function add(a,b) that returns their sum and log the result

let sum=(a,b)=>{
    return a+b
}

console.log(sum(2,4))

// write a function with a default parameter name="Guest" that prints "Hi <name>"

function fun(name="Guest"){
    console.log(`Hi ${name}`)
}
fun()

// use rest parameter to make a function that unlimited numbers.

function add(...a){
    let sum=0
    a.forEach(function(val){
       sum+=val
    })
    console.log(sum)
}
add(1,2,3,4,4,5,6,7,7,8)
console.log(sm)

function addUnlimited(...nums){
    let ans=nums.reduce(function(acc,val){
        return acc+val;
    },0);
    console.log(ans);
}

addUnlimited(1,2,3);

// create an IIFE(immediatly invoked function expression) that prints "I run instantly"

(function(){
    console.log("I run instantly")
})();

// make a nested function where the inner one prints a variable from the outer one.
function outer(){
    let x=12
   function inner(){
     console.log(x);
   }
   inner()
}

outer()

// create a array of 5 fruits . add one at the end and remove one from the beginning.
let arr=[1,2,3,4,5,6]
arr.push(19)
arr.shift()

// use a for loop to print all elements of an arar.

let ab=[1,2,3,4,5,5,6,77,7]

ab.forEach(element => {
    console.log(element)
});

// create an object person with keys name, age , and city,and print each key's value.

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

// Level 2-Functional thinking and logic tasks (intermediate)

// 1.write a higher order function 'runTwice(fn)' that takes anoter function and executes it two times.

function runTwice(fn){
   fn();
   fn();
}

runTwice(function(){
    console.log("hello")
})

// 2.create one pure function that always returns the same output for given input , and one impure function using a global variable.
let a=4
function f(val){
    console.log(val+2)
}
f(a)
f(a)
f(a)

let global=0
function impure(a){
    global++;
    console.log(a+global);
}

impure(2)
impure(2)
impure(2)

// write a function that uses object destructuring inside parameters to extract and print name and age.


person={
    name:"mahboob",
    age:22
}
function object({name,age}){
    console.log(`${name} , ${age}`)
}
object(person)

// Demonstrate the difference between noraml function and arrow function when used as object methods(this issue)

// this keyword
function ac(){
    console.log(this) // window object
}
ac()

let obj={
    name:"mahboob",
    fun:function(){
        console.log(this); //this refers to obj
    },
};
obj.fun(); //In an object method, this always refers to the object that calls the method.

let obJ={
    name:"mahboob",
    fun:function(){
        console.log(this); //this refers to obJ
    },
    fun2:()=>{
        console.log(this); // arrow function apni this ki value parent se leta hai-> parent object here window object
    }
};
obJ.fun();
obJ.fun2();

// 👉 Normal function me this = jo usse call karta hai
// 👉 Arrow function me this = jo bahar hai (parent)

let Obj = {
    name: "Mahboob",
    outer: function () {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};

Obj.outer();
// Final Rule (Yaad rakh bhai)
// Object method (normal function) → this = object
// Uske andar normal function → this = window
// Arrow function → parent ka this

// Given an array of numbers use map() to create a new array where each number is squared

let ar=[1,2,3,4,5]

let ans=ar.map((v)=>{
  return v**v;
})
console.log(ans)

// use filter() to get only even numbers from an array

let even=ar.filter((val)=>{
    return val%2===0
//    if (val%2==0) return val;

});

// use reduce() method to find the total salary from an array of number [1000,2000,3000]
li=[1000,2000,3000]
let total_sal=li.reduce((val,x)=>{
    return val+x;
},0)

// create an array of names and use some() and every() to test a condition (e.g all names longer than 3 chars).
let names=["rahu","om","mahboob","fanraj"]

// let anss=name.some(function (val){
//     return val.length>3;
// });
let anss=name.every(function (val){
    return val.length>3;
});

// create an object user and test the behavior of object . freeze() and object.seal() by adding/changing keys.

let user={
    name:"harsh",
    age:33,
    email:"nakj^^",
};
Object.freeze(user) // u cant't chnage anythings
Object.seal(user) // u can chnage val but can't add anythings
user.name="mahboob"

// create a nested object (user -> address->city) and access the city name inside it.
let obJJ={
    user:{
        name:"hamr",
        address:{
            city:"bhopal",
        },
    },
};

// destructing
let {city}=obJJ.user.address;



