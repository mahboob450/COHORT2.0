let aA=new Audio('./A6.mp3')
let aB=new Audio('./Ab2.mp3')
let aC=new Audio('./Bb3.mp3')
let aD=new Audio('./C5.mp3')
let aE=new Audio('./D6.mp3')
let aF=new Audio('./Db2.mp3')
let aG=new Audio('./Eb3.mp3')
let aH=new Audio('./F4.mp3')
let aI=new Audio('./G5.mp3')
let aJ=new Audio('./Gb1.mp3')

A.addEventListener('click', () => { aA.currentTime = 0; aA.play() })
B.addEventListener('click', () => { aB.currentTime = 0; aB.play() })
C.addEventListener('click', () => { aC.currentTime = 0; aC.play() })
D.addEventListener('click', () => { aD.currentTime = 0; aD.play() })
E.addEventListener('click', () => { aE.currentTime = 0; aE.play() })
F.addEventListener('click', () => { aF.currentTime = 0; aF.play() })
G.addEventListener('click', () => { aG.currentTime = 0; aG.play() })
H.addEventListener('click', () => { aH.currentTime = 0; aH.play() })
I.addEventListener('click', () => { aI.currentTime = 0; aI.play() })
J.addEventListener('click', () => { aJ.currentTime = 0; aJ.play() })

A.addEventListener('click', () => aA.play())
B.addEventListener('click', () => aB.play())
C.addEventListener('click', () => aC.play())

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'KeyA': aA.currentTime = 0; aA.play(); break
    case 'KeyB': aB.currentTime = 0; aB.play(); break
    case 'KeyC': aC.currentTime = 0; aC.play(); break
    case 'KeyD': aD.currentTime = 0; aD.play(); break
    case 'KeyE': aE.currentTime = 0; aE.play(); break
    case 'KeyF': aF.currentTime = 0; aF.play(); break
    case 'KeyG': aG.currentTime = 0; aG.play(); break
    case 'KeyH': aH.currentTime = 0; aH.play(); break
    case 'KeyI': aI.currentTime = 0; aI.play(); break
    case 'KeyJ': aJ.currentTime = 0; aJ.play(); break
  }
})


A.addEventListener('keydown',function(dets){
     if(dets.code==='KeyA'){
        aA.play()
     }
})
B.addEventListener('keydown',function(dets){
     if(dets.code==='KeyB'){
        aB.play()
     }
})
C.addEventListener('keydown',function(dets){
     if(dets.code==='C'){
        aC.play()
     }
})
D.addEventListener('keydown',function(dets){
     if(dets.code==='D'){
        aD.play()
     }
})
E.addEventListener('keydown',function(dets){
     if(dets.code==='E'){
        aE.play()
     }
})
F.addEventListener('keydown',function(dets){
     if(dets.code==='F'){
        aF.play()
     }
})    


G.addEventListener('keydown',function(dets){
     if(dets.code==='G'){
        aG.play()
     }
})
H.addEventListener('keydown',function(dets){
     if(dets.code==='KeyH'){
        aH.play()
     }
})
I.addEventListener('keydown',function(dets){
     if(dets.code==='KeyI'){
        aI.play()
     }
})
J.addEventListener('keydown',function(dets){
     if(dets.code==='KeyJ'){
        aJ.play()
     }
})