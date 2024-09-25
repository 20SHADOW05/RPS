console.log("====== ROCK  PAPER  SCISSORS ======");
let Computer_Choice;
let Display = 0;
let ComputerScore = 0;
let HumanScore = 0;
function PlayGame(){
    function getComputerChoice(max = 120){
        let value =  Math.floor(Math.random()*max);
    
        if(value<=40){
        Computer_Choice = "rock";
        }
    
        else if(value > 40 && value <= 80){
        Computer_Choice = "paper";
        }
    
        else{
        Computer_Choice = "scissors";
        }
    
        return Computer_Choice;
        
    }
    
    function getHumanChoice(){
        let choice = prompt("Enter your choice :");
        return choice.toLowerCase();
    }
    
        let ComputerChoice = getComputerChoice();
        let HumanChoice = getHumanChoice();
        console.log("Computer chose : " + Computer_Choice);
        console.log("You chose : " + HumanChoice);
        
        
        function PlayRound(ComputerChoice,HumanChoice){
            ++Display;
            console.log("Round " + Display + " Scores :")
            if(HumanChoice == "rock" && ComputerChoice == "scissors"){
                ++HumanScore;
                console.log("Your Score : " + HumanScore);
                console.log("Computer Score : " + ComputerScore);
                console.log("You won Round " + Display + ". Computer chose " + ComputerChoice);
            }
        
            else if(HumanChoice == "paper" && ComputerChoice == "rock"){
                ++HumanScore;
                console.log("Your Score : " + HumanScore);
                console.log("Computer Score : " + ComputerScore);
                console.log("You won Round " + Display + ". Computer chose " + ComputerChoice);
            }
        
            else if(HumanChoice == "scissors" && ComputerChoice == "paper"){
                ++HumanScore;
                console.log("Your Score : " + HumanScore);
                console.log("Computer Score : " + ComputerScore);
                console.log("You won Round " + Display + ". Computer chose " + ComputerChoice);
            }
        
            else if(HumanChoice === ComputerChoice){
                console.log("It's a tie! Computer also chose " + ComputerChoice);
            }
        
            else{
                ++ComputerScore;
                console.log("Your Score : " + HumanScore);
                console.log("Computer Score : " + ComputerScore);
                console.log("Computer won Round " + Display + "! Computer chose " + ComputerChoice + " and you chose "+HumanChoice);
            }
        
        }
        
        PlayRound(ComputerChoice,HumanChoice);

        console.log("Next Round");

}

PlayGame();
PlayGame();
PlayGame();
PlayGame();
PlayGame();

console.log("Your total score : " + HumanScore);
console.log("Computer total score : " + ComputerScore);

if(HumanScore > ComputerScore ){
    console.log(" Game ended.You won the match");
}
else if(HumanScore < ComputerScore ) {
    console.log(" Game ended.You lost the match.");
}
else{
    console.log("It's a Tie.")
}



