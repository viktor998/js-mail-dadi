var playerNumber = Math.floor(Math.random() * 6) + 1;
var cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber, cpuNumber);

if(playerNumber > cpuNumber){
    console.log("the winner is Player 1");
}else if(playerNumber == cpuNumber){
    console.log("it's a pair");
}else{
    console.log("the winner is CPU");
}