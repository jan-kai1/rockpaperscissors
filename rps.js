//prompt user for rock paper or scissors


//run game 5 times to see winner



document.addEventListener("DOMContentLoaded", function(){

    let container = document.querySelector(".container").style;
    let announcement = document.querySelector(".announcement")
    startbutton = document.querySelector(".start");

//starts the game
    startbutton.addEventListener("click", function(e)
    {   //tracks win loss of 5 games
        playerWin = 0;
        computerWin =0;
        buttons = document.querySelectorAll(".choice>button");
        for (button of buttons)
        {
            button.addEventListener('click', trackRounds);
           
        }
        announcement.textContent ="Game Start! 5 Games";
       
    }, {once : true});
  




    function trackRounds()
    {
        roundResult = playGame(this.id);
                if (roundResult == true)
                {
                    playerWin++;
        
                }
                else if (roundResult == false)
                {
                    computerWin++;
                }
               
                if (playerWin >2)
                {
                    announcement.textContent = `You Win ${playerWin} : ${computerWin}`;
                    for (button of buttons)
                    {
                        button.removeEventListener('click', trackRounds)
                    }
                }
                else if (computerWin > 2)
                {
                    announcement.textContent = `You Lose! ${playerWin} : ${computerWin}`;
                    for (button of buttons)
                    {
                        button.removeEventListener('click', trackRounds)
                    }
                }
    }

    function playRounds()
    {
        let playerWin = 0;
        let computerWin = 0;
        for (let i =0; i<5;i++)
        {
            let roundResult = playGame();
            if (roundResult == 1)
            {
                return;
            }
            if (roundResult == true)
            {
                playerWin++;
    
            }
            else if (roundResult == false)
            {
                computerWin++;
            }
            else
            {
                continue;
            }
        }
        if (playerWin> computerWin)
        {
            console.log(`player wins ${playerWin} : ${computerWin}`);
        }
        else if (playerWin == computerWin)
        {
            console.log("draw");
        }
        else{
            console.log(`computer wins ${playerWin} : ${computerWin}`);
        }
    }
    
    
    
    
    function playGame(playerChoice)
    {   
       
        
        // let playerChoice = prompt("Rock, Paper or Scissors", "What do you choose");
        
        playerChoice = playerChoice.toLowerCase();
        
        let roundsChoice = computerChoice();
        //create computer choice
        // if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice!= 'scissors')
        // {
        //     console.log('input a valid choice');
        //     return 1;
        // }
        if (playerChoice == roundsChoice)
        {
            console.log("draw");
            container.backgroundColor = 'orange';
            announcement.textContent ="Draw!"
            return undefined;
            
        }
        else if ((roundsChoice == "rock" && playerChoice == "scissors")||(roundsChoice == "paper"&&playerChoice == "rock")||(roundsChoice == "scissors"&&playerChoice=="paper"))
        {
            console.log('loss');
            container.backgroundColor ='red';
            announcement.textContent ="Loss!"
            return false;
        }
        else
        {
            console.log("win");
            container.backgroundColor='green';
            announcement.textContent="WIN"
            return true;
        }
    }
    
    
    
    function computerChoice()
    {
        //math.random, random float from 0,1
        //*3 makes it 0 to 2
        // math.floor rounds to lowest whole no. ie 0,1,2
        let randomNumber = Math.floor(Math.random()*3);
        if (randomNumber == 0)
        {
            return "rock";
    
        }
        else if (randomNumber == 1)
        {
            return "paper";
        }
        else if (randomNumber ==2)
        {
            return "scissors"
        }
    }

});


