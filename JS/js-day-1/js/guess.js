const num = document.querySelector(".num");
const sub = document.querySelector(".sub");
const preGuess = document.querySelector(".preGuess");

const low = document.querySelector(".low-high");
const success = document.querySelector(".success");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 1;

console.log(randomNumber);

function guessCheck(){
    const checkNum = Number(num.value);
    preGuess.textContent += checkNum+ " ";

    if (checkNum === randomNumber){
        low.innerHTML="";
        success.innerHTML = "Congratulations.. You Guessed it Right";
        gameover();
    }
    else if(count === 10){
        low.innerHTML = "Game Over!!";
        gameover();
    }
    else if(checkNum > randomNumber){
        low.innerHTML = "Your Guess is too HIGH";
        count+=1;
    }
    else{
        low.innerHTML = "Your Guess is too LOW";
        count+=1;
    }
    num.value="";
    num.focus();
}
if(sub){
    sub.addEventListener("click",guessCheck);
}

function gameover(){
    num.disabled = true;
}