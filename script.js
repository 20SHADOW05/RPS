let start = alert("Click on the Buttons with images to Start Playing");
let Computer_Choice;
let ComputerScore = 0;
let round = 0;
let HumanScore = 0;
let choice;
let pin = Array.from(document.querySelectorAll(".game"));  
function playGame (){

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

        function PlayRound(Humanchoice , ComputerChoice){

            if(Humanchoice == "rock" && ComputerChoice == "scissors"){

                ++HumanScore;
                let Your_score = document.querySelector(".scoreY");
                Your_score.textContent = `Your Score : ${HumanScore}`;
                let C_score = document.querySelector(".scoreC");
                C_score.textContent = `Computer Score : ${ComputerScore}`;

                let display = document.querySelector("#display");
                display.textContent = `You win Round ${round}`;
            }
        
            else if(Humanchoice == "paper" && ComputerChoice == "rock"){

                ++HumanScore;
                let Your_score = document.querySelector(".scoreY");
                Your_score.textContent = `Your Score : ${HumanScore}`;
                let C_score = document.querySelector(".scoreC");
                C_score.textContent = `Computer Score : ${ComputerScore}`; 

                let display = document.querySelector("#display");
                display.textContent = `You win Round ${round}`;
            }
        
            else if(Humanchoice == "scissors" && ComputerChoice == "paper"){

                ++HumanScore;
                let Your_score = document.querySelector(".scoreY");
                Your_score.textContent = `Your Score : ${HumanScore}`;
                let C_score = document.querySelector(".scoreC");
                C_score.textContent = `Computer Score : ${ComputerScore}`;  
                
                let display = document.querySelector("#display");
                display.textContent = `You win Round ${round}`;
            }
        
            else if(Humanchoice === ComputerChoice){

                let Your_score = document.querySelector(".scoreY");
                Your_score.textContent = `Your Score : ${HumanScore}`;
                let C_score = document.querySelector(".scoreC");
                C_score.textContent = `Computer Score : ${ComputerScore}`;

                let display = document.querySelector("#display");
                display.textContent = ` Round ${round} is a Tie.`;
            }
        
            else{

                ++ComputerScore;
                let Your_score = document.querySelector(".scoreY");
                Your_score.textContent = `Your Score : ${HumanScore}`;
                let C_score = document.querySelector(".scoreC");
                C_score.textContent = `Computer Score : ${ComputerScore}`;

                let display = document.querySelector("#display");
                display.textContent = `Computer wins Round ${round}`;
            }
        }

        pin.forEach((image)=> 
            image.addEventListener("click", () => {
                let Humanchoice = image.dataset.image;
                let ComputerChoice = getComputerChoice();
                round++;
                console.log("Your Choice : ",Humanchoice);
                console.log("Computer Choice : ",ComputerChoice);
                PlayRound(Humanchoice , ComputerChoice);

                if(round == 5){
                    alert("Your match ended");
                    if(HumanScore>ComputerScore){
                        let win = document.querySelector("#winner");
                        win.textContent = "Winner : You Win";
                    }
                    else if(HumanScore == ComputerScore){
                        let win = document.querySelector("#winner");
                        win.textContent = "It's a Tie";
                    }
                    else{
                        let win = document.querySelector("#winner");
                        win.textContent = "Winner : Computer Wins";
                    }
                    round = 0;
                    HumanScore = 0;
                    ComputerScore = 0
                    let Your_score = document.querySelector(".scoreY");
                    Your_score.textContent = `Your Score : ${HumanScore}`;
                    let C_score = document.querySelector(".scoreC");
                    C_score.textContent = `Computer Score : ${ComputerScore}`;
                 }

                })
            );

            
    }
    playGame();

        
        
    