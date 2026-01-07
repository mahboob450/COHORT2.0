// what are arrays in javascript and how to create an array.
//Array:- An array in JavaScript is used to store multiple values in a single variable.
let arr=[1,2,3,4,5]
console.log(arr[4])

arr[2]
let ar = [];
let a = new Array(); // Using Array Constructor

// functions on arrays-[push,pop,shift,unshift,indexof,array destructuring , filter,
// some,map, reduce,spread operator,slice,reverse,sort,join,toString]
/*
📦 Array Functions Cheat Sheet
1️⃣ push() → add element at end
let a = [1,2];
a.push(3); // [1,2,3]

2️⃣ pop() → remove last element
a.pop(); // [1,2]

3️⃣ unshift() → add element at start
a.unshift(0); // [0,1,2]

4️⃣ shift() → remove first element
a.shift(); // [1,2]

5️⃣ indexOf() → find index of element
[10,20,30].indexOf(20); // 1

6️⃣ Array Destructuring → extract values
let [x, y] = [10, 20 ,30,40];
console.log(x, y); // 10 20

7️⃣ filter() → select elements (condition).New array create krega
[1,2,3,4].filter(n => n % 2 === 0);
// [2,4]

8️⃣ some() → check if any element matches
[1,3,5].some(n => n % 2 === 0);
// false

9️⃣ map() → transform each element
[1,2,3].map(n => n * 2);
// [2,4,6]

🔟 reduce() → reduce to single value
[1,2,3].reduce((a,b) => a + b, 0);
// 6

1️⃣1️⃣ Spread Operator ... → copy / merge arrays
let a = [1,2];
let b = [...a, 3];
// [1,2,3]

1️⃣2️⃣ slice() → extract part of array
[1,2,3,4].slice(1,3);
// [2,3]

1️⃣3️⃣ reverse() → reverse array
[1,2,3].reverse();
// [3,2,1]

1️⃣4️⃣ sort() → sort elements
[3,1,2].sort();
// [1,2,3]


⚠️ For numbers:

[10,2].sort((a,b) => a-b);
// [2,10]

1️⃣5️⃣ join() → array → string
["a","b","c"].join("-");
// "a-b-c"

1️⃣6️⃣ toString() → convert to string
[1,2,3].toString();
// "1,2,3"

*/ 

// Iterating over arrays using -[ for loop, foreach]

let are=[1,2,3,4,5]
are.forEach(function(val){
    console.log(val)
});

// understanding what are object in javascript-[key-value pair]

let obj={
    name:"Mahboob",
    age:22,
    socials:{
        instragram:"mahboob1817",
        facebook:"amshai"
    }
};
obj['name']
delete obj.name;
let obj2=new Object(); //This line creates an empty object in JavaScript.




