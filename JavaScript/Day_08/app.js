let box=document.querySelector('#box')
let button=document.querySelector('button')


button.addEventListener('click' , function(){
   let c1=Math.floor(Math.random()*256)
   let c2=Math.floor(Math.random()*256)
   let c3=Math.floor(Math.random()*256)

   box.style.backgroundColor=`rgb(${c1},${c2},${c3})`
    box.innerHTML=`rgb(${c1},${c2},${c3})`
})


var arr=['vedant','abhi','souvik','sumit','ankit','satwik','sarthak']
var a=Math.floor(Math.random()*arr.length)
console.log(arr[a])

// Make 
