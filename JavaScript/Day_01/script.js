// Introduction to js
/*
js ek scripting language hai
computer ko binary smj aati hai jo ki 0 1 me likhi jati hai
010001111100010101101
harsh -> interpreter / compiler -> 01010101
js bhi aishi language jo hum insan likhte hai and wo 0011101
main convert ki jaati hai taki machine smj ske

computer powerful hai unhe use krne se hum kaam jldi ker skte hai and unki language humain nahi aati
 humaari language unhe nhi aaati to ek translator
 banao jo hamaari language ko unki lang me covert kede and ulta bhi ker->compiler/interpreter

 js -> brendan eich
 netscape mai kaam kerte the
 15-16 dino me 
 itni jaldi bani to kafi issues reh gaya
 jaldbaji ka kaam ho gya
 errors and bugs chuuuut gya
 to unhe fix krte krte js ke bhut sare versions aye
 unme se ek sabse bda version aya jiska naam tha es6
 uske baad aur bhi version aye par es6 sabse bda change rha js ki 
 history me kyuki js laghbhag completely badal gya
 matlab ki js ke issues and bugs and problems ko fix krne ke liye bhut saare naye updates diye gaye es6 version mein
*/
//  js sirf browser ke liye banayi gayi thi
// js browser pe chlti hai
// hum index.html se connect krte hai js file ko
// jab aapki html file chlegi tab he aapka js bhi chal jaayega

// Why it is important- kyoki website pe animation -> interaction -> laghbhag haar prakaar ka koe engagement create kerne k liye js use hoti hai
//  ctrl + shift + j ->shortcut to open console
let a=5
let b=9
const c=99
console.log(a+b)
// c=90 /* throw an error*/
console.log("hanhaa")
ans=prompt("enter your name") // prompt se jo v loge wo ek string ban jayega
age=prompt("enter age:") // age='22'
alert(`welcome ${ans}`) 
console.log(type(ans))
let msg="my name is md mahboob alam"
console.log(msg)

// console.log(ans)
// s="mahboob bhai app kaise ho"
// console.log(s.slice(2,7))
// s="mahbbob"
// s="mashkoor"


// slice template-strings (template literal ``) split,slice , includes, replace

/*Data type->
number:Integers aur decimals dono ke liye.
let n=4
let m=576.4

Boolean: true ya false
let isAns=true

string:Text / characters ke liye.
let s="mahboob alam"

null:Intentional empty value.
let data=null

Undefined:Variable declare hai but value assign nahi hui.
let x;
console.log(x) // undefined

BigInt:Bohot bade integers ke liye.
let big=12234567878n;

Symbol:Unique values (mostly advanced use).
let id = Symbol("id");

* Non-primitive data types
Object:key-value pairs

let person={
name:"mahboob"
age:22
};

Array:Multiple values ek variable me
let arr = [1, 2, 3, 4];

Function:Function v ek data type hai
function greet(){
return "hellow";
}

var a=[1,2,3,4];
var b=a

// primitives-jinki value direct copy kr skte hai
reference - jinki value direct copy nahi ker skte
*/