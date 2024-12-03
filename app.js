
const winResult = document.querySelector('.win');

function computerChoise(){
let randomNumber = Math.floor(Math.random() * 3 + 1);
if(randomNumber === 1) {
    return 'rock'
}else if (randomNumber === 2) {
    return 'paper'
}else if (randomNumber === 3) {
    return 'scissor'
}
}

const yourImg = document.querySelector('.your-img')

const comImg = document.querySelector('.com-img')

const rock = document.querySelector('#rockPng');
rock.addEventListener('click',() => {
    pressRock()
    yourImg.style.display = "block"
    yourImg.innerHTML = 'Rock'
    
    comImg.style.display = "block"
})


function pressRock() {
     if(computerChoise() == 'rock') {
        winResult.innerHTML = 'Match Draw'
        comImg.innerHTML = "rock"
    }
    else if(computerChoise() == "paper") {
        winResult.innerHTML = 'You Lose'
        comImg.innerHTML = "paper"
    }
    if(computerChoise() == "scissor") {
        winResult.innerHTML = 'You Win'
        comImg.innerHTML = "scissor"
    }
}    
    
    
const paper = document.querySelector('#paperPng');
paper.addEventListener('click',() =>{ 
    pressPaper()
    yourImg.style.display = "block"
    yourImg.innerHTML = 'Paper'
    
    comImg.style.display = "block"
})
function pressPaper() {
     if(computerChoise() == 'rock') {
        winResult.innerHTML = 'You Win'
        comImg.innerHTML = "rock"
    }
    else if(computerChoise() == "paper") {
        winResult.innerHTML = 'Match Draw'
        comImg.innerHTML = "paper"
    }
    if(computerChoise() == "scissor") {
        winResult.innerHTML = 'You Lose'
        comImg.innerHTML = "scissor"
    }
}

const scissor = document.querySelector('#scissorPng');
scissor.addEventListener('click', () =>{
    pressScissor()
    yourImg.style.display = "block"
    yourImg.innerHTML = 'Scissor'
    
    comImg.style.display = "block"
})
function pressScissor() {
     if(computerChoise() == 'rock') {
        winResult.innerHTML = 'You Lose'
        comImg.innerHTML = "rock"
    }
    else if(computerChoise() == "paper") {
        winResult.innerHTML = 'You Win'
        comImg.innerHTML = "paper"
    }
    if(computerChoise() == "scissor") {
        winResult.innerHTML = 'Match Draw'
        comImg.innerHTML = "scissor"
    }
}