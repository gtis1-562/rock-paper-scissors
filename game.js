// Run fucntion after player choice input (2)
   const rockBtn = document.getElementById('rock');
   const paperBtn = document.getElementById('paper');
   const scissorsBtn = document.getElementById('scissors');

  

   rockBtn.addEventListener('click', () => {
    document.getElementById('my-choice').innerText = "Rock"
    playGame("rock")
   })
   paperBtn.addEventListener('click', () => {
    document.getElementById('my-choice').innerText = "Paper"
    playGame("paper")
   })
   scissorsBtn.addEventListener('click', () => {
    document.getElementById('my-choice').innerText = "Scissors"
    playGame("scissors")
   })

   

   const reset = document.getElementById('rst');
   reset.addEventListener('click', () => {
    counter = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').innerText = 0;
    document.getElementById('computerScore').innerText = 0;
    document.getElementById('result').innerText = ""
    document.getElementById('gameCount').innerText = 0
    console.log("NEW GAME")
    five.innerText = ""
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
   })
   
let playerScore = 0;
let computerScore = 0;
let counter = 0;

let five = document.getElementById('fiveGames');


function playGame(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log("Computer Choice: ", computerChoice) 
        
        let win = "You Win!!!  " + playerChoice + "  beats  " + computerChoice;
        let tie = "It's a Tie";
        let loose = "You Loose!  " + computerChoice + "  beats  " + playerChoice;

       
        
        if(playerChoice === computerChoice){
            document.getElementById('computerOutput').innerText = computerChoice
            document.getElementById('result').innerText = tie
            console.log("Computers Score: ",computerScore)
            console.log("Players Score: ",playerScore)
            counter++
        } else  if(
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            document.getElementById('computerOutput').innerText = computerChoice
            document.getElementById('result').innerText = win
            let myScore = document.getElementById('playerScore')
            playerScore++
            myScore.innerText = playerScore
            console.log("Computers Score: ",computerScore)
            console.log("Players Score: ",playerScore)
            counter++
        } else if(
            (playerChoice === "paper" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "rock") ||
            (playerChoice === "rock" && computerChoice === "paper")
        ){
            document.getElementById('computerOutput').innerText = computerChoice
            document.getElementById('result').innerText = loose
            let compScore = document.getElementById('computerScore');
            computerScore++
            compScore.innerText = computerScore
            console.log("Computers Score: ",computerScore)
            console.log("Players Score: ",playerScore)
            counter++
        }
        console.log("Player Choice: ",playerChoice)
        if(counter === 5){
            if(
                (playerScore > computerScore) ||
                (playerScore == 3)
                ){
                    five.innerText = "Player Wins Game: " + " Player Score: " + playerScore + 
                    "  Computer Score: " + computerScore
                console.log("I WIN!!")
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else if(
                (playerScore < computerScore) ||
                (playerScore == 3)
                ){
                    five.innerText = "Computer Wins Game: " + " Player Score: " + playerScore + 
                    "  Computer Score: " + computerScore
                console.log("COMPUTER WINS!!")
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else if(playerScore === computerScore){
                five.innerText = "Tied Game: " + " Player Score: " + playerScore +
                 "  Computer Score: " + computerScore
                console.log("We Tied")
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            }
        }
        let counting = document.getElementById('gameCount');
        counting.innerText = counter
        console.log(counter)
        }


    

// const playerChoice = prompt("check here: "); // player choice input   (1)
// Output (7)
// const result = playGame();
