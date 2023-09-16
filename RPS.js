const option = ["rock", "paper", "scissors"];

function getComputerChoice(min, max) {
    const choices = option[Math.floor(Math.random() * option.length)];
    return choices;
}



function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (( playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);

    if (result == "Tie"){
        return "No one Won. It`s a tie."
    }
    if (result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayer(){
    let validPrompt = false;
    while (validPrompt == false){
        const choice = prompt("Rock, paper or Scissors");
        if (choice == null){
            continue;            
        }
        const lowerChoice = choice.toLowerCase();
        if (option.includes(lowerChoice)){
            validPrompt = true;
            return lowerChoice;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Wellcome, DO you want a duel?")
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayer();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-.-.-.-.-.-.-")
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        }        
    }
    if (playerScore > computerScore){
        console.log("Player was Lucky.")
    }
    else if(computerScore > playerScore){
        console.log("The Computer alawys win!")
    }
    else {
        console.log("A boring tie...")
    }
}


game()
