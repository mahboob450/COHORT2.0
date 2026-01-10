


let btn=document.querySelector('button')
btn.addEventListener('click',function(){
    var h1=document.createElement('h1')
    console.log(h1)
    h1.innerHTML='hellow mahboob , how are you?'
})

var h1=document.createElement('h1')
h1.innerHTML='hellow from js'
var main=document.querySelector('main')
main.appendChild(h1)

var bt=document.createElement('button')
bt.innerHTML='Download'
main.appendChild(bt)

