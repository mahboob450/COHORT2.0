// when user clicks on button create h1 , put random quote in it(from array) , give them random position,rotation , scale color and append to parent
let arr=["Hi,I am Mahboob!","I am engineering student","I am web developer","I am good at problem solving","I am cricket lover"]

let btn=document.querySelector('button')
let main=document.querySelector('main')

btn.addEventListener('click',function(){
    let h1=document.createElement('h1')
    let x=Math.random()*100
    let y=Math.random()*100
    let z=Math.random()*360
    let scl=Math.random()*3
    let num=Math.floor(Math.random()*arr.length)
    h1.innerHTML=arr[num]
    h1.style.position='absolute'
    h1.style.left=x+'%'
    h1.style.top=y+'%'
    // h1.style.rotate=z+'deg'
    // h1.style.scale=scl
    h1.style.transform = `rotate(${z}deg) scale(${scl})`
    main.appendChild(h1)
})