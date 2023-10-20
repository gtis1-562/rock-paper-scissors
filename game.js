// Run fucntion after player choice input (2)
    function playGame(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log("Computer Choice: ", computerChoice) 
        // computer runs through array randomly and picks out a choice. (3)
        
    
        let player = playerChoice.toLowerCase(); // Players input can be written with uppercase. (3)

        // conditional variables that are for outcome  (5)
        let win = "You Win!!!  " + playerChoice + "  beats  " + computerChoice;
        let tie = "It's a Tie";
        let loose = "You Loose!  " + computerChoice + "  beats  " + playerChoice;
        
        // Comparison and outcome (4) & (6)
        if(player === computerChoice){
            return tie
        } else  if(
            (player === "rock" && computerChoice === "scissors") ||
            (player === "paper" && computerChoice === "rock") ||
            (player === "scissors" && computerChoice === "paper")
        ) {
            return win 
        } else {
            return loose
        }
        
        }
   

    

const playerChoice = prompt("check here: "); // player choice input   (1)
// Output (7)
const result = playGame(playerChoice);
console.log("My Choice: ", playerChoice)
console.log(result)
