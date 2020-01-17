let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randonNumber = Math.ceil(Math.random() * 3);
    return choices[randonNumber];
}

function convert(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissor';
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smuwd = "user".fontsize(3).sub();
    const smcwd = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(userChoice) + smuwd + " beats " + convert(computerChoice) + smcwd + " , YOU WIN!";

}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smuwd = "user".fontsize(3).sub();
    const smcwd = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(userChoice) + smuwd + " loses to " + convert(computerChoice) + smcwd + " , YOU LOSE!";

}

function draw(userChoice, computerChoice) {
    const smuwd = "user".fontsize(3).sub();
    const smcwd = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(userChoice) + smuwd + " equals " + convert(computerChoice) + smcwd + " , IT'S A DRAW!";

}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

game();

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });
    paper_div.addEventListener('click', function () {
        game("p");
    });
    scissor_div.addEventListener('click', function () {
        game("s");
    });
}

main();