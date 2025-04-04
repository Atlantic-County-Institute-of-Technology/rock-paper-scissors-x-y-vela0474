// script.js
// description: JS file for rock, paper, scissors example project
// author: vela0474
// last update: 4.02.25

// html elements
const your_pick = document.querySelectorAll (".your_pick");
const user_scoreEl = document.getElementById ("user_score");
const computer_scoreEl = document.getElementById ("computer_score");
const reset_button = document.getElementById("reset_button");
const result_text = document.getElementById ("result_text");
const playeryour_pickEl = document.getElementById("playeryour_pick");
const computeryour_pickEl = document.getElementById("computeryour_pick");
const options = ["rock","paper","scissor","pencil","lipstick"];

//these are the users default scores
let user_score = 0;
let computer_score = 0;


your_pick.forEach(your_pick => {
    your_pick.addEventListener("click", () => {
    const user_score = your_pick.id;
        playGame(user_score);        
    });
}); //this is where the user and the score is built 


function playGame (useryour_pick) {
    const computeryour_pick =
    getcomputeryour_pick();
    const winner = determinewinner(useryour_pick, computeryour_pick);
    updateUI(useryour_pick, computeryour_pick, winner);
};//This is where the game is supposed to start

function getcomputeryour_pick() {
    
    const randomIndex = Math.floor(Math.random() * options.length);
    
    return options[randomIndex];
    
    //This tells the computer what to pick
};

function determinewinner(useryour_pick, computeryour_pick) {
    let winner
    // if the user and cpu are the same, draw
    if (useryour_pick === computeryour_pick) {
        return "draw";
    } 
    // all win conditions for user
    else if (
        (useryour_pick === "scissor" && computeryour_pick === "lipstick" || computeryour_pick === "paper" || computeryour_pick === "pencil") ||//scissor beats lipstick,paper and pencil
        
        (useryour_pick === "rock" && computeryour_pick === "pencil" || computeryour_pick === "lipstick" || computeryour_pick === "scissor") || //rock beats pencil,lipstick and scissor
        
        (useryour_pick === "pencil" && computeryour_pick === "lipstick" || computeryour_pick === "paper" ) || //pencil beats lipstick and paper
        
        (useryour_pick === "lipstick" && computeryour_pick === "paper" || computeryour_pick === "scissor") || //lipstick beats paper and scissor
        
        (useryour_pick === "paper" && computeryour_pick === "rock" || computeryour_pick === "scissor")) //paper beats rock
        {
            user_score++;
            winner = "user";
        } 
        // user wins
        else {
            computer_score++;
            winner = "computer";
        }  //else, computer wins
        
 updateUI(useryour_pick, computeryour_pick, winner)
};
     
function updateUI(useryour_pick,computeryour_pick, winner) {
   
    const your_pickEmojis = {
        rock: "✊",
        paper: "🤚",
        scissor: "✌️",
        pencil: "✏️",
        lipstick:  "💄"
    }

    playeryour_pickEl.textContent = your_pickEmojis[useryour_pick];
    computeryour_pickEl.textContent = your_pickEmojis[computeryour_pick];
    //This is supposed to show the emojis on the your choice and computer choice
    
    if (winner === "draw") {
        result_text.textContent = `It ends in a draw ${useryour_pick}`;
    } else if (winner === "user") {
        result_text.textContent = `You win ${useryour_pick} beats ${computeryour_pick}`;
        user_scoreEl.textContent = user_score;
    } else {
        result_text.textContent = `You lose ${computeryour_pick} beats ${useryour_pick}`;
        computer_scoreEl.textContent = computer_score;
    }; //All of this makes the game end in a draw, win, or lose for the cpu or user
};  


 reset_button.addEventListener("click", () => {
    user_score = 0;
    computer_score = 0;
    user_scoreEl.textContent = "0";
    computer_scoreEl.textContent = "0";
    result_text.textContent = "Choose your weapon";
}); //This resets the points of the game and restarts the whole game to 0
