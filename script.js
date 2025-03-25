const your_pick = document.querySelectorAll (".your_pick");
const user_scoreEl = document.getElementById ("user_score");
const computer_scoreEl = document.getElementById ("computer_score");
const reset_button = document.getElementById("reset_button");
const result_text = document.getElementById ("result_text");

let user_score = 0;
let computer_score = 0;


your_pick.forEach(your_pick => {
    your_pick.addEventListener("click", () => {
    const user_score = your_pick.id;
        playGame(user_score);
    });
});


function playGame (useryour_pick) {
    const computeryour_pick =
    getcomputeryour_pick();
   const winner = determinewinner(useryour_pick, computeryour_pick);
   updateUI(useryour_pick, computeryour_pick, winner);
};

function getcomputeryour_pick() {
    const options = ["rock","paper","scissor","pencil","lipstick"];
    const randomIndex = Math.floor(Math.random() * options.length);
    
    return options[randomIndex];

};

function determinewinner(useryour_pick, computeryour_pick) {
    if (useryour_pick === computeryour_pick) {
        return "draw";
};

if (
   (useryour_pick === "scissor" && computeryour_pick === "lipstick") ||

   (useryour_pick === "rock" && computeryour_pick === "pencil") ||

   (useryour_pick === "pencil" && computeryour_pick === "lipstick") ||

   (useryour_pick === "lipstick" && computeryour_pick === "paper") ||

   (useryour_pick === "rock" && computeryour_pick === "lipstick") ||

   (useryour_pick === "rock" && computeryour_pick === "scissor") ||

   (useryour_pick === "scissor" && computeryour_pick === "paper") ||

   (useryour_pick === "pencil" && computeryour_pick === "paper") ||

   (useryour_pick === "paper" && computeryour_pick === "rock") ||

   (useryour_pick === "lipstick" && computeryour_pick === "scissor") ||

   (useryour_pick === "scissor" && computeryour_pick === "paper") 

) 

{
    user_score++;
    return "user";
} 
    else {
    computer_score++;
    return "computer";
}
    };

    function updateUI(useryour_pick, computeryour_pick, winner) {
        if (winner === "draw") {
            result_text.textContent = `It ends in a draw ${useryour_pick}`;
        } else if (winner === "computer") {
            result_text.textContent = `You win ${useryour_pick} beats ${computeryour_pick}`;
            user_scoreEl.textContent = user_score;
           
        } else {
            result_text.textContent = `You lose ${computeryour_pick} beats ${useryour_pick}`;
            computer_scoreEl.textContent = computer_score;
        }
    };
    

 reset_button.addEventListener("click", () => {
    user_score = 0;
    computer_score = 0;
    user_scoreEl.textContent = "0";
    computer_scoreEl.textContent = "0";
    result_text.textContent = "Choose your weapon";
});