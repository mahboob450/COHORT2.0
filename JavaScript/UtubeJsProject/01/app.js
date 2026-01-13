let istatus=document.querySelector('h5')
let btn=document.querySelector('#add')
// let removeFriend=document.querySelector('#remove')
count=0
btn.addEventListener('click',function(){
    if(count===0){
        istatus.innerHTML='Friend'
        istatus.style.color='green'
        btn.innerHTML='Remove Friend'
        count=1
    }
    else{
        istatus.innerHTML='Stranger'
        istatus.style.color='red'
         btn.innerHTML='Add Friend'
         count=0

    }
})

// removeFriend.addEventListener('click',function(){
//     istatus.innerHTML='Stranger'
//     istatus.style.color='red'
// })