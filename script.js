// 3 options
const options = ["rock", "paper", "scissors"];

// Computers random choice
const getComputerChoice = () => {
  const choice = options[Math.floor(Math.random() * options.length)];
//Math.random will give max 0.9. multiplied by length (0.9*3) = 2.7. Math.floor rounds down to 2. Arrays start at 0. [0,1,2] length is 3.
  return choice;
};

// Human choice
function getHumanChoice(){
    const humanPrompt = prompt('Make a decision shithead: rock, paper or scissors').toLowerCase();
    return humanPrompt;
};

// Check winner
const checkWinner = (humanChoice, computerChoice) => {
  if(humanChoice == computerChoice){
    return "Draw"
  } else if(
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ){
    return "Player"
  } else {
    return "Computer"
  }
}

// Play a single round
const playRound = (humanChoice, computerChoice) => {
//variable below(result) calls the checkwinner function and stores the result from humanChoice vs computerChoice. we then use the variable in the if statement.
  const result = checkWinner(humanChoice, computerChoice);
    if(result == 'Draw'){
      return `You Draw! ${humanChoice} draws ${computerChoice}`
    } else if(result == 'Player'){
      return `You Win! ${humanChoice} beats ${computerChoice}`
    } else{
      return `Computer Wins! ${computerChoice} beats ${humanChoice}` 
    }
          
  }

// Play game
const playGame = () => {
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  console.log(`Play Game`);
  for(let round = 1; round < 6; round++){
    console.log(`Round: ${round}`)
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log(playRound(humanChoice, computerChoice))
    if(checkWinner(humanChoice, computerChoice) == 'Player'){
      playerScore+=1;
    } else if (checkWinner(humanChoice, computerChoice) == 'Computer'){
      computerScore+=1;
    }
  }
  console.log(`Game Over!`)
  if(playerScore > computerScore){
    console.log(`Player One Wins! (${playerScore} vs. ${computerScore})`);
  } else if(playerScore < computerScore){
    console.log(`Computer Wins! hahaha. (${computerScore} vs. ${playerScore}) I like your technique. I must try it on your sister!`)
  } else {
    console.log(`We have a draw! (${playerScore} vs. ${computerScore})`)
  }
}

// playGame();





