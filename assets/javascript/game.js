let wins = 0;
let losses = 0;

function newGameState() {
    gameState = {
        goalValue: Math.floor(Math.random()*102)+19,
        crystalValues: [
            Math.ceil(Math.random()*12), 
            Math.ceil(Math.random()*12), 
            Math.ceil(Math.random()*12),
            Math.ceil(Math.random()*12)
        ],
        currentValue: 0
    }
    $("#goalDisplay").text("Goal: " + gameState.goalValue);
    $("#winCounter").text("Wins: " + wins);
    $("#lossCounter").text("Losses: " + losses);
    $("#scoreDisplay").text(gameState.currentValue);
    return gameState;
}

$(document).ready(function (){
    let game = newGameState();
    
    $(".crystalSprite").click(function(){
        game.currentValue += game.crystalValues[this.value];
        $("#scoreDisplay").text(game.currentValue);
        if(game.currentValue === game.goalValue) {
            wins++;
            game = newGameState();
        }
        else if(game.currentValue >= game.goalValue) {
            losses++;
            game = newGameState();
        }
    });
});

