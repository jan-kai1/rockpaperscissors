//prompt user for rock paper or scissors


//run game 5 times to see winner
playRounds();







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




function playGame()
{
    let playerChoice = prompt("Rock, Paper or Scissors", "What do you choose");
    if (playerChoice==undefined)
    {
        console.log('you exited the game');
        return;
    }
    playerChoice = playerChoice.toLowerCase();
    
    let roundsChoice = computerChoice();
    //create computer choice
    if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice!= 'scissors')
    {
        console.log('input a valid choice');
        return 1;
    }
    if (playerChoice == roundsChoice)
    {
        console.log("draw")
        return undefined;
        
    }
    else if ((roundsChoice == "rock" && playerChoice == "scissors")||(roundsChoice == "paper"&&playerChoice == "rock")||(roundsChoice == "scissors"&&playerChoice=="paper"))
    {
        console.log('loss')
        return false;
    }
    else
    {
        console.log("win")
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