let btnAll=document.querySelectorAll('button')
console.log(btnAll)

btnAll.forEach(function(ele){
    ele.addEventListener('click',function(){
        // ele.innerHTML='remove friend'
        if(ele.innerHTML=='Add Friend'){
            ele.innerHTML='Remove Friend'
        }else{
            ele.innerHTML='Add Friend'
        }
    })
})