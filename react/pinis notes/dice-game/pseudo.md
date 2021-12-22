Components:
Background
Game
playerContainer -> currentScore, globalScore
Dice
Options -> Option ->  new game, roll dice, hold, input


Game will hold the state
state:
state = {
pointsToWin:100,
winner:false,
dices: [null,null],
playersTurn:0,
players:[
{
currentScore:0,
GlobalScore:0,
Wins:0
},
{
currentScore:0,
GlobalScore:0,
Wins:0
}
]

** PROPS **

* PlayerContainer -> 
Iterate over players object. Each player repersents a player container
this.state.players.map(player,i)

currentplayer = i, 
playersTurn = state.playersTurn, 
currentScore = player.currentScore, 
globalScore = player.globalScore

* PlayerContainer -> GlobalScore
score = globalScore

* PlayerContainer -> CurrentScore
score = currentScore

* Dice
values = state.dices

* Options -> option
Each receives a function that will get invoked in Game Component
NewGame = resetGame
RollDice = handleDice
HoldDice = handleHoldDice
Input = handlePointsToWin

resetGame(){
    reset game to initial value
}

handleDice(){
    * create dice values (random 1- 6) -> add them up and put to state
    * add all dice values and give to players currentScore
    * if dices are double then remove currentScore and go to next player -> state.currentPlayer+1
}

handleHold(){
    *add currentScore to the players globalScore
    * reset currentScore to 0
    * check if globalScore >= state.pointsToWin
      * if >= setState.winner = true
        * else go to next player state.currentPlayer +1
}

handlePointsToWin(value){
    * get input value from Input Component and change state.pointsToWin = value
}

