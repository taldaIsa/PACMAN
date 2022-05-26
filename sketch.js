var fundo;
var fundo2;
var PACMAN;
var PACMANimage;
var batatinha;
var hamburguer;
var pipoquita;
var pizza;
var batatinha1;
var batatinha2;
var hamb1;
var pipo1;
var pzz1;
var pzz2;
var milk;
var shake;
var bolinha;


function preload(){
fundo = loadImage("labirinto.png");
PACMANimage = loadImage("pacman.gif");
batatinha = loadImage("batata.png");
hamburguer = loadImage("hamburguer.png");
pipoquita = loadImage("pipoca.png");
pizza = loadImage("pizza.png");
milk = loadImage("milkshake.png");
bolinha = loadImage("bolinha.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
fundo2 = createSprite(width/2,height/2);
fundo2.addImage(fundo);
fundo2.scale = 1.4;
PACMAN = createSprite(450,height/2-2.5);
PACMAN.addImage(PACMANimage);
PACMAN.scale = 0.085;
batatinha1 = createSprite(570,450);
batatinha1.addImage(batatinha);
batatinha1.scale = 0.08;
batatinha2 = createSprite(725,220);
batatinha2.addImage(batatinha);
batatinha2.scale = 0.08;
hamb1 = createSprite(570,134);
hamb1.addImage(hamburguer);
hamb1.scale = 0.12;
pipo1 = createSprite(835,500);
pipo1.addImage(pipoquita);
pipo1.scale = 0.1;
pzz1 = createSprite(465,570);
pzz1.addImage(pizza);
pzz1.scale = 0.1;
pzz2 = createSprite(783,328);
pzz2.addImage(pizza);
pzz2.scale = 0.1;
shake = createSprite(990,320);
shake.addImage(milk);
shake.scale = 0.15;
bolinhas(36,495,570);
bolinhas(37,478,165);
bolinhas(18,465,97);
bolinhasY(10,465,112);
bolinhas(0,680,130);
bolinhas(18,725,97);
bolinhas(10,465,243);
bolinhas(7,850,237);
bolinhas(14,620,260);
bolinhas(14,620,371);
bolinhasY(29,836,107);
bolinhasY(20,569,177);
bolinhasY(12,946,98.2);
bolinhas(6,620,215);
bolinhas(13,484,326);
bolinhas(10,850,328);
bolinhas(2,810,328);
bolinhas(18,459,417);
bolinhas(9,725,414);
bolinhas(9,843,414);
}

function bolinhas(qbolinhas,x,y) {
 for(var i = 0;i<qbolinhas;i++){
 bolinha1 = createSprite( x + 13* i ,y);
 bolinha1.addImage(bolinha);
 bolinha1.scale = 0.1;   
}
}
function bolinhasY(qbolinhas,x,y) {
 for(var i = 0;i<qbolinhas;i++){
 bolinha1 = createSprite( x,y + 13* i);
 bolinha1.addImage(bolinha);
 bolinha1.scale = 0.1;   
   }
}



function draw() {
if(keyDown("left")){
PACMAN.velocityX = -2;
PACMAN.velocityY = 0;
}
if(keyDown("right")){
PACMAN.velocityX = 2;
PACMAN.velocityY = 0;
}
if(keyDown("up")){
PACMAN.velocityY = -2;
PACMAN.velocityX = 0;
}
if(keyDown("down")){
PACMAN.velocityY = 2;
PACMAN.velocityX = 0;
}
background("black");
drawSprites();
}