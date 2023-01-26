const bmx = document.getElementById('bmx')
const botle = document.getElementById('botle')
const birds = document.getElementById('birds')

document.addEventListener('keydown', function(event){
    jump()
})

document.onclick =function(){
    jump()
}
function jump(){
    if(bmx.classList != 'jump'){
        bmx.classList.add('jump') 
    }

    setTimeout(function(){
        bmx.classList.remove('jump') 
    },300)

}

let score = 0
let increaseScore = score++
let isAlive = setInterval(function(){
    let  bmxTop = parseInt(window.getComputedStyle(bmx).getPropertyValue('top'))
    let  botleLeft = parseInt(window.getComputedStyle(botle).getPropertyValue('left'))
    //счет
    increaseScore = score++
  
    document.querySelector('.figure').innerText =increaseScore
    //Если проиграл 
    if(botleLeft < 100 && botleLeft > 0 &&  bmxTop >= 200){
       
        gameOver()
        
        

    
    }
    else if (increaseScore == 1000){
        botle.style.backgroundImage = 'url(../img/poop_PNG38.png)'
        
    }
    else if (increaseScore == 500){
        birds.style.backgroundImage = 'url(../img/birds.png)'
       
    }
    else if (increaseScore == 1500){
        birds.style.backgroundImage = 'url(../img/airplane.png)'
       
    }
    else if (increaseScore == 2500){
        birds.style.backgroundImage = 'url(../img/birds.png)'
       
    }

    else if (increaseScore == 2000){
        botle.style.backgroundImage = 'url(../img/bomb.png)'
        
    }
    
    
    else if (increaseScore == 3500){
        botle.style.backgroundImage = 'url(../img/botle.png)'
    }
   
    if (increaseScore > 5000 && botleLeft < 100 && botleLeft > 0 &&  bmxTop >= 200 ){
        
        document.querySelector('.total').innerHTML = 'Поздравляю ты выиграл бутылочку пивка!'
        document.querySelector('.kat').src = "https://www.unipack.ru/light_editor_img/images/2020-3-4/file1583234388.jpg"
    }
    
},10)

function gameOver(){
    document.querySelector('.figure').style.display= 'none'
    botle.style.backgroundImage = 'url()'
    bmx.style.display = 'none'
    birds.style.display = 'none'
    let total = score
    console.log(total)
    document.querySelector('.modal-wrapper').classList.remove('hide')
    setTimeout(function(){
        window.location.reload()
    },5000)
     document.querySelector('#restart').onclick = ()=>{
        setTimeout(function(){
            window.location.reload()
        },100)
         
    } 
    
    
}

