var database;
var playerCount;
var form, player, game;
var gameState=0;
var allPlayers;
var car1, car2, car3, car4, cars;
var cbg_img;


function preload(){
cbg_img = loadImage("car racing 1.png")
}
function setup(){
    createCanvas(displayWidth-50, displayHeight-130);

    database = firebase.database();

    game=new Game();
    game.getgameState();
    game.start();


}

function draw(){

    if(playerCount === 4){
       game.updategameState(1);
    
    }
    if(gameState === 1){
        clear();
        game.play();
    }

    
}