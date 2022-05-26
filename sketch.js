var fundo;
var fundo2;
var PACMAN;
var PACMANimage;
var PACMANcima;
var PACMANbaixo;
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
var parede1,parede2,parede3,parede4,parede5,parede6,parede7,parede8,parede9,parede10;
var parede11,parede12,parede13,parede14,parede15,parede16,parede17,parede18,parede19,parede20;
var parede21,parede22,parede23,parede24,parede25,parede26,parede27,parede28,parede29,parede30;
var parede31,parede32,parede33,parede34,parede35,parede36,parede37,parede38,parede39,parede40;
var quadrado1,quadrado2,quadrado3,quadrado4,quadrado5,quadrado6,quadrado7,quadrado8,quadrado9;
var grpdeblnhs;
var grpdecomidas;
var pontuaçao = 0;
var contador = 0;
var contador1 = 0;
var linhadechegada;

function preload(){
fundo = loadImage("labirinto.png");
PACMANimage = loadImage("pacman.gif");
PACMANimage2= loadImage("esquerda.gif")
batatinha = loadImage("batata.png");
hamburguer = loadImage("hamburguer.png");
pipoquita = loadImage("pipoca.png");
pizza = loadImage("pizza.png");
milk = loadImage("milkshake.png");
bolinha = loadImage("bolinha.png");
PACMANcima = loadImage("pacman (1).gif");
PACMANbaixo = loadImage("pacman1.gif");
}

function setup() {
createCanvas(windowWidth,windowHeight);
fundo2 = createSprite(685,330);
fundo2.addImage(fundo);
fundo2.scale = 1.4;
PACMAN = createSprite(450,328);
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
grpdeblnhs = new Group();
grpdecomidas = new Group();
grpdecomidas.add(batatinha1);
grpdecomidas.add(batatinha2);
grpdecomidas.add(hamb1);
grpdecomidas.add(pipo1);
grpdecomidas.add(pzz1);
grpdecomidas.add(pzz2);
grpdecomidas.add(shake);

// paredes quadradas
quadrado1=createSprite(518,135,60,30);
quadrado2=createSprite(625,135,60,30);
quadrado3=createSprite(785,135,60,30);
quadrado4=createSprite(888,135,60,30);
quadrado5=createSprite(518,205,60,30);
quadrado6=createSprite(888,205,60,30);
quadrado7=createSprite(705,315,113,73);
quadrado8=createSprite(570,540,160,30);
quadrado9=createSprite(835,540,160,30);


//visibilidade das paredes quadradas
quadrado1.visible=false;
quadrado2.visible=false;
quadrado3.visible=false;
quadrado4.visible=false;
quadrado5.visible=false;
quadrado6.visible=false;
quadrado7.visible=false;
quadrado8.visible=false;
quadrado9.visible=false;

linhadechegada=createSprite(990,330,20,20);
linhadechegada.visible=false;
// Parede esquerda
parede1=createSprite(440,344,5,520);

//Parede direita
parede2=createSprite(967,190,5,240);
parede3=createSprite(967,480,5,280);

//Parede cima
parede4=createSprite(705,82,535,5);

//Parede baixo
parede5=createSprite(705,597,535,5);

//Paredes entrada Pacman cima
parede6=createSprite(488,305,105,5);
parede7=createSprite(488,260,105,5);
parede8=createSprite(545,283,9,53);

//Paredes entrada Pacman baixo
parede9=createSprite(488,350,105,5);
parede10=createSprite(488,395,105,5);
parede11=createSprite(545,373,9,53);

//labirinto baixo - entrada Pacman
parede12=createSprite(467,485,50,5);

//Paredes saida Pacman cima
parede13=createSprite(915,305,105,5);
parede14=createSprite(915,260,105,5);
parede15=createSprite(863,283,9,53);

//Paredes saida Pacman baixo
parede16=createSprite(915,350,105,5);
parede17=createSprite(915,395,105,5);
parede18=createSprite(863,373,9,53);

//labirinto baixo - saida Pacman
parede19=createSprite(940,485,50,5);

//labirinto cima - de pé
parede20=createSprite(703,110,5,75);
parede21=createSprite(703,215,5,50);
parede22=createSprite(599,250,5,115);
parede23=createSprite(809,250,5,115);

//labirinto cima - deitado
parede24=createSprite(703,192,105,5);
parede25=createSprite(625,238,50,5);
parede26=createSprite(780,238,50,5)

//labirinto baixo - de pé
parede27=createSprite(599,373,9,45);
parede28=createSprite(809,373,9,45);
parede29=createSprite(703,415,5,50);
parede30=createSprite(703,520,5,75);

//labirinto baixo - deitado
parede31=createSprite(703,395,105,5);
parede32=createSprite(703,485,105,5);
parede33=createSprite(625,440,55,5);
parede34=createSprite(780,440,55,5)

//labirinto baixo - do lado batatinha
parede35=createSprite(599,500,9,45);
parede36=createSprite(545,464,9,45);
parede37=createSprite(520,440,55,5);

//labirinto baixo - do lado da pipoquinha
parede38=createSprite(887,440,55,5);
parede39=createSprite(862,464,7,45);
parede40=createSprite(808,505,7,45);

//visibilidade das paredes
parede1.visible=false;
parede2.visible=false;
parede3.visible=false;
parede4.visible=false;
parede5.visible=false;
parede6.visible=false;
parede7.visible=false;
parede8.visible=false;
parede9.visible=false;
parede10.visible=false;
parede11.visible=false;
parede12.visible=false;
parede13.visible=false;
parede14.visible=false;
parede15.visible=false;
parede16.visible=false;
parede17.visible=false;
parede18.visible=false;
parede19.visible=false;
parede20.visible=false;
parede21.visible=false;
parede22.visible=false;
parede23.visible=false;
parede24.visible=false;
parede25.visible=false;
parede26.visible=false;
parede27.visible=false;
parede28.visible=false;
parede29.visible=false;
parede30.visible=false;
parede31.visible=false;
parede32.visible=false;
parede33.visible=false;
parede34.visible=false;
parede35.visible=false;
parede36.visible=false;
parede37.visible=false;
parede38.visible=false;
parede39.visible=false;
parede40.visible=false;


//colisão PACMAN
PACMAN.debug=false;
PACMAN.setCollider("circle",0,0,160);



bolinhas(36,495,575);
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
bolinhasY(6,937,497);
bolinhasY(4,937,427);
bolinhasY(4,472,429);
bolinhasY(4,678,110);
bolinhasY(3,620,177);
bolinhasY(4,730,110);
bolinhasY(4,790,177);
bolinhas(3,750,216);
bolinhasY(4,627,273);
bolinhasY(3,777,272);
bolinhasY(3,627,337);
bolinhasY(3,627,380);
bolinhas(20,596,463);
bolinhasY(6,677,497);
bolinhasY(6,729,497);
bolinhasY(3,680,428);
bolinhasY(3,725,425);
bolinhasY(5,783,352);
bolinhasY(6,880,454);
bolinhas(6,860,500);
bolinhasY(6,524,450);
bolinhasY(4,471,498);
bolinhasY(4,570,475);
bolinhasY(4,627,475);
bolinhasY(4,778,476);
bolinhas(14,505,505);


}

function bolinhas(qbolinhas,x,y) {
 for(var i = 0;i<qbolinhas;i++){
 bolinha1 = createSprite( x + 13* i ,y);
 bolinha1.addImage(bolinha);
 bolinha1.scale = 0.1;  
 grpdeblnhs.add(bolinha1);
}
}
function bolinhasY(qbolinhas,x,y) {
 for(var i = 0;i<qbolinhas;i++){
 bolinha1 = createSprite( x,y + 13* i);
 bolinha1.addImage(bolinha);
 bolinha1.scale = 0.1;  
 grpdeblnhs.add(bolinha1);
   }
}

function comer(){
PACMAN.overlap(grpdeblnhs,function(colector,colected){
colected.remove();
contador = contador + 1;
if(contador %3 == 0){
pontuaçao = pontuaçao + 1;
}
})

}

function comer2(){
PACMAN.overlap(grpdecomidas,function(colector,colected){
colected.remove();
pontuaçao = pontuaçao + 2;
contador1 = contador1 + 1;
})
}




function draw() {

  background("black")
drawSprites();
if(keyDown("left")){
PACMAN.velocityX = -4;
PACMAN.velocityY = 0;
PACMAN.rotation=0;
PACMAN.addImage("PACMANimage2",PACMANimage2);
PACMAN.changeImage("PACMANimage2");
}
if(keyDown("right")){
PACMAN.velocityX = 4;
PACMAN.velocityY = 0;
PACMAN.addImage("PACMANimage",PACMANimage);
PACMAN.changeImage("PACMANimage");
}
if(keyDown("up")){
PACMAN.velocityY = -4;
PACMAN.velocityX = 0;
PACMAN.addImage("PACMANcima",PACMANcima);
PACMAN.changeImage("PACMANcima");
}
if(keyDown("down")){
PACMAN.velocityY = 4;
PACMAN.velocityX = 0;
PACMAN.addImage("PACMANbaixo",PACMANbaixo);
PACMAN.changeImage("PACMANbaixo");
}
if(PACMAN.isTouching(linhadechegada)){
PACMAN.velocityX = 0;
PACMAN.velocityY = 0;
if(pontuaçao >= 150){
fill("red");
textSize(25);
stroke("white");
text("GAMEOVER",width/2 -50,height/2);
text("Você venceu!!",width/2-50,height/2 +50);


}
else{
fill("red");
textSize(25);
stroke("white");
text("GAMEOVER",width/2 -50,height/2);
text("Você perdeu!!",width/2 -50,height/2 +50);

}
}


fill("white");
textSize(25)
text("Pontuação "  + pontuaçao,1030,30);





//  colisao dos quadrados
PACMAN.collide(quadrado1);
PACMAN.collide(quadrado2);
PACMAN.collide(quadrado3);
PACMAN.collide(quadrado4);
PACMAN.collide(quadrado5);
PACMAN.collide(quadrado6);
PACMAN.collide(quadrado7);
PACMAN.collide(quadrado8);
PACMAN.collide(quadrado9);

//  colisao das paredes
PACMAN.collide(parede1);
PACMAN.collide(parede2);
PACMAN.collide(parede3);
PACMAN.collide(parede4);
PACMAN.collide(parede5);
PACMAN.collide(parede6);
PACMAN.collide(parede7);
PACMAN.collide(parede8);
PACMAN.collide(parede9);
PACMAN.collide(parede10);
PACMAN.collide(parede11);
PACMAN.collide(parede12);
PACMAN.collide(parede13);
PACMAN.collide(parede14);
PACMAN.collide(parede15);
PACMAN.collide(parede16);
PACMAN.collide(parede17);
PACMAN.collide(parede18);
PACMAN.collide(parede19);
PACMAN.collide(parede20);
PACMAN.collide(parede21);
PACMAN.collide(parede22);
PACMAN.collide(parede23);
PACMAN.collide(parede24);
PACMAN.collide(parede25);
PACMAN.collide(parede26);
PACMAN.collide(parede27);
PACMAN.collide(parede28);
PACMAN.collide(parede29);
PACMAN.collide(parede30);
PACMAN.collide(parede31);
PACMAN.collide(parede32);
PACMAN.collide(parede33);
PACMAN.collide(parede34);
PACMAN.collide(parede35);
PACMAN.collide(parede36);
PACMAN.collide(parede37);
PACMAN.collide(parede38);
PACMAN.collide(parede39);
PACMAN.collide(parede40);

comer();
comer2();

}
