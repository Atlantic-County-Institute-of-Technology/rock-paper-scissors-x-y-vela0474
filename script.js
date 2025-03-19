const your_pick = document.querySelectorAll (".your_pick");
const score_boardEl = document.getElementById ("computer_score");
const scoreEl = document.getElementById ("user_score");
const reset = document.getElementById ("reset");
const resulttext = document.getElementById ("result");


let user_score = 0;
let computer_score = 0;

your_pick.forEach(your_pick => {
    your_pick.addEventListener("click", () => {
        const user_score = your_pick.id;
        playGame(your_pick);
    });
    
});

function playGame (your_pick) {
    const computeryour_pick = 
    getcomputeryour_pick(); 

   const winner = determinewinner(useryour_pick, computeryour_pick);
   
   updateUI(useryour_pick, computeryour_pick, winner);

}

function getcomputeryour_pick() {
    const options = ["rock","paper","scissor"];

    const randomindex = math.floor(math.random() * options.length);

    return options[randomindex];

}

function determinewinner(useryour_pick, computeryour_pick) {
    if (useryour_pick === computeryour_pick) {
        return "draw";
}

if (
    (useryour_pick === "rock" && computeryour_pick === "scissor") ||
    (useryour_pick === "paper" && computeryour_pick === "rock") ||
    (useryour_pick === "scissor" && computeryour_pick === "paper") 
) {
    user_score++;
    return "user";
} else {
    computer_score++;
    return "computer";
}
    }
function updateUI(useryour_pick, computeryour_pick, winner) {
    if (winner === "draw") {
        resulttext.textcontent = `It ends in a draw ${useryour_pick}.`;
    } else if (winner === "winner") {
        resulttext.textContent = `You win ${useryour_pick} beats ${computeryour_pick}.`;
        user_scoreEl.textContent = user_score;
    } else {
        resulttext.textContent = `You loose ${computeryour_pick} beats ${useryour_pick}.`;
        computer_scoreEl.textContent = computer_score;
    }
}

reset.addEventListener("click", () => {
    user_score = 0;
    computer_score = 0;
    user_score.textContent = "0";
    computer_score.textContent = "0";
});