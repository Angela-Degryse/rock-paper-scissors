
const choices = ["rock", "paper", "scissors"];

function computerSelection(){
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

function playerSelection(){
    let choice="";

    do{
        choice = prompt('Rock, paper or scissors').toLowerCase();

    }while(choices.indexOf(choice)<0);
    
    return choice;
}

function playRound(playerSelection, computerSelection){
const player = playerSelection;
const computer = computerSelection;

    if(player==="rock"){
        if(computer ==="paper") return "Computer won";
        if(computer === "rock") return "tie";
        else return "player won"
    }
    if(player==="paper"){
        if(computer ==="scissors") return "Computer won";
        if(computer === "paper") return "tie";
        else return "player won"
    }
    if(player==="scissors"){
        if(computer ==="rock") return "Computer won";
        if(computer === "scissors") return "tie";
        else return "player won"
    }
    else return "unknown error";
}

function game(){
    let amountWonCom = 0;
    let amountWonPlay = 0;

    while(amountWonCom<3 && amountWonPlay<3){
       let  winner = playRound(playerSelection(), computerSelection());

       if(winner ==="player won") ++amountWonPlay;
       else if(winner==="Computer won") ++amountWonCom;

       console.log(winner); 
    }
        
    
}

game();
