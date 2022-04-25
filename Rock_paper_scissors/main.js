//Cacheing DOM-storing these to future usage/It is for convenience
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("scoreboard");
const result_p = document.querySelector(".result>p");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");

//function for getting computer choice
function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);//getting random nums between 0-2/never reaches 3
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}


function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();//sup method moves it up/sub moves down
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compScore)}${smallCompWord}. You win!!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow")},300);
    console.log("Win");


}

function lose(userChoice,computerChoice){
    compScore++;
    const smallUserWord = "user".fontsize(3).sup();//sup method moves it up/sub moves down
    const smallCompWord = "comp".fontsize(3).sup();
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compScore)}${smallCompWord}. You lost!!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow")},300);
    console.log("lost");
    
}

function draw(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sup();//sup method moves it up/sub moves down
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compScore)}${smallCompWord}. Draw!!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("gray-glow")},300);
    console.log("Draw");
}


//Main function for the GAME
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
          win(userChoice,computerChoice);
          break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;

    }
    
}

function main(){
    rock_button.addEventListener('click',function(){
        game("r");
    });

    paper_button.addEventListener('click',function(){
        game("p");
    });

    scissors_button.addEventListener('click',function(){
        game("s");
    });
}
main();








