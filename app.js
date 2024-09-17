let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#rst");

const compChoiceGen = () => {
    const options = ["stone", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () => {
    msg.innerText = `Draw 😓. Play agian`;
    msg.style.backgroundColor = "#758694";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! 😲 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#9BEC00";
        userScorePara.innerHTML
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. 😢 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#F05A7E";
    }
}

const playGame = (userChoice) => {
    console.log(`userChoice ${userChoice}`);
    // Generate computer choice
    const compChoice = compChoiceGen();
    console.log(`compChoice ${compChoice}`);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    console.log("clicked");
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = `Play your move!`
    msg.style.backgroundColor = "#5DEBD7"
});