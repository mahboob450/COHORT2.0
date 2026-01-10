let btn=document.querySelector('button')
var h2=document.querySelector('h2')
var inner=document.querySelector('#inner')

let num=50+Math.floor(Math.random()*50)
grow=0
btn.addEventListener('click',function(){
      btn.style.pointerEvents='none'
    var int=setInterval(()=>{
          grow++
          h2.innerHTML=grow+'%'
          inner.style.width=grow+'%'
    },num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML='Downloaded'
        btn.style.opacity=0.5
      
    }, num*100);
    console.log('Downloaded in ',num/10,'second')
})
