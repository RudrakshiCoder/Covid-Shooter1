// creating canvas
var canvas;

// var for loading images
var startImg, bg1, insImg, bg2;

// var for adding images.
var start, backgroundImg, instruction, backgroundImg2;

// var for making title ,input and button;
var title, playerName, country;

// var for GameState.
var FORM = 1;
var INTRO = 2;
var INSTRUCT = 3;

var gameState = 1;

function preload(){
  startImg = loadImage("Images/start.png");
  bg1 = loadImage("Images/backgroundImg.jpg");
  insImg = loadImage("Images/instructions.png ")
  bg2 = loadImage("Images/backgroundImg1.jpg");
}


function setup() {
 canvas = createCanvas(1500,700);


 // creating title
 title = createElement('h1');
 title.html("✨COVID SHOOTING GAME✨");
 title.position(500,65);

 // creating input for player name
 playerName = createInput("Name");
 playerName.position(670,235);

 // creating input for city
 country = createInput("Country");
 country.position(670,415);

 // sprite for start button.
 start = createSprite(756,600);
 start.addImage(startImg);
 start.scale = 0.4;
 
}

function draw() {
  background(255,255,255);  

  // when game state is form
  if(gameState === 1){
     
    stroke("black");
    fill("black");
    textSize(20);
    text("Enter Your Name Here 👇👇",640,200);
    text("Enter Your Country Name Here 👇👇",610,380);
  }


  // Game state changing from FORM into INTRO
  if(mousePressedOver(start)&& gameState === 1){
    gameState = INTRO
  }

  //Game sate changing from INTRO to INSTRUCT
  if(mousePressedOver(instruction) && gameState === 2){
    gameState = 3;

   
  }

  


  

 

  drawSprites();

  // when gameState is INTRO
  if(gameState === INTRO){

    // to set the background.
    backgroundImg = createSprite(780,380);
    backgroundImg.addImage(bg1);
    backgroundImg.scale = 2.7;

    // to hide FORM options
    hiding();

    // to hide start button
    start.visible = false;

    // to greet player and tell story
    stroke("black");
    fill("black");
    textSize(20);
    textFont("algerian");
    text("your  country  is  in  danger !!  there  is  a  deadly  virus🎇🎇",450,200);
    text("which  is  continuously  killing  many  residents  of  your  country",420,250);
    text("you  are  warrior  and  i  am  pretty  sure you  will  save  your  country",390,300);
    text("so  let's  do  this  mission👐",630,350);

    // to make the instruction button
    instruction = createSprite(1370,70);
    instruction.addImage(insImg);
    instruction.scale = 0.4;
    
    

  }

  // when gameState is INSTRUCT
  if(gameState === 3){
    
    // to set the background image for INSTRUCT
    backgroundImg2 = createSprite(750,350);
    backgroundImg2.addImage(bg2);
    backgroundImg2.scale = 2;
     
    // To make instruction button invisible
    instruction.visible = false;

    // to tell the instructions
    stroke("black");
    fill("black");
    textSize(50);
    textFont("algerian");
    text("INSTRUCTIONS",640,100);

    stroke("blue");
    fill("blue");
    textSize(39);
    textFont("monotype corsiva");
    text("1. Use  right  and  left  arrow  key  to  move.",200,200);
    text("2. Complete the target given to you to defeat the virus.",200,250);

   
  }


}

// function which can hide form options.
function hiding(){
  title.hide();
  playerName.hide();
  country.hide();
}