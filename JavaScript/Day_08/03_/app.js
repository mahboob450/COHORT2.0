var btn=document.querySelector('button')
var main=document.querySelector('main')

btn.addEventListener('click',function(){
    var c1=Math.floor(Math.random()*256)
    var c2=Math.floor(Math.random()*256)
    var c3=Math.floor(Math.random()*256)
    var div=document.createElement('div')
    div.style.height='200px'
    div.style.width='200px'
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`

    main.appendChild(div)
})