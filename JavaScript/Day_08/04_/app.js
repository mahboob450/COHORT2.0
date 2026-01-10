// by default js is synchronous in nature
// setTimeout-delay
// console.log("hello1")
// setTimeout(() => {
//     console.log("hello2")
// }, 3000);
// console.log("hello3")

let btn=document.querySelector('button')
let h1=document.querySelector('h1')

btn.addEventListener('click',()=>{
    console.log("you clicked button!")
    setTimeout(()=>{
        h1.innerHTML='hellow I am Md Mahbbob Alam'
    },2000)
})

//  controlled loop
var int=setInterval(function(){
    console.log('hello guyes');
},1000)

setTimeout(()=>{
    clearInterval(int)
},5000);