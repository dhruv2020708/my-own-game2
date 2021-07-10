var bg1,bg2,bg3,bg4,bg5,playImg,play;
var gameState="start";
var a1,a2,a3,aa1,aa2,aa3,aaa1,aaa2,a1Img,a2Img,a3Img,aa1Img,aa2Img,aa3Img,aaa1Img,aaa2Img;
function preload(){
  bg1=loadImage("./Images/background1.png");
  bg2=loadImage("./Images/backgroundq1 (1).png");
  bg3=loadImage("./Images/backgroundq2 (2).png");
  bg4=loadImage("./Images/backgroundq3 (3).png");
  bg5=loadImage("./Images/background2.png")
  playImg=loadImage("./Images/play.png");
  a1Img=loadImage("./Images/q1a.jpg");
  a2Img=loadImage("./Images/q1b.jpg");
  a3Img=loadImage("./Images/q1c.jpg");

  aa1Img=loadImage("./Images/q2a.jpg");
  aa2Img=loadImage("./Images/q2b.jpg");
  aa3Img=loadImage("./Images/q2c.jpg");

  aaa1Img=loadImage("./Images/q3a.jpg");
  aaa2Img=loadImage("./Images/q3b.jpg");
  
}

function setup(){
  createCanvas(1300,700);
  play=createSprite(1000,150);
play.addImage(playImg);
play.scale=0.15;
 
a1=createSprite(200,500);
a1.addImage(a1Img);
a1.scale=0.15;

a2=createSprite(600,500);
a2.addImage(a2Img);
a2.scale=0.15;

a3=createSprite(1000,500);
a3.addImage(a3Img);
a3.scale=0.15;

aa1=createSprite(200,550);
aa1.addImage(aa1Img);
aa1.scale=0.15;

aa2=createSprite(600,550);
aa2.addImage(aa2Img);
aa2.scale=0.15;
aa3=createSprite(1000,550);
aa3.addImage(aa3Img);
aa3.scale=0.15;

aaa1=createSprite(200,600);
aaa1.addImage(aaa1Img);
aaa1.scale=0.15;

aaa2=createSprite(600,600);
aaa2.addImage(aaa2Img);
aaa2.scale=0.15;
}


function draw(){
  background(bg1);
  if(gameState==="start"){
    play.visible =true;
    a1.visible =false;
    a2.visible =false;
    a3.visible =false;

    aa1.visible =false;
    aa2.visible =false;
    aa3.visible =false;

    aaa1.visible =false;
    aaa2.visible =false;
   
    if(mousePressedOver(play)){ 
      background(bg2); 
      gameState="level1";
      
    }
  }
  if(gameState==="level1"){
    background(bg2); 
      play.visible=false;
      
      a1.visible =true;
    a2.visible =true;
    a3.visible =true;

    aa1.visible =false;
    aa2.visible =false;
    aa3.visible =false;

    aaa1.visible =false;
    aaa2.visible =false;
   
    if(mousePressedOver(a2)){
      background(bg3);
      
      gameState="question2";
    }

  }
  if(gameState==="question2"){
    background(bg3);
    
    a1.visible =false;
    a2.visible =false;
    a3.visible =false;

    aa1.visible =true;
    aa2.visible =true;
    aa3.visible =true;

    aaa1.visible =false;
    aaa2.visible =false;
    if(mousePressedOver(aa3)){
      background(bg4);
      gameState="question3";
    }
    
  }
  
  if(gameState==="question3"){
    background(bg4);
    aaa1.visible =true;
    aaa2.visible =true;
    a1.visible =false;
    a2.visible =false;
    a3.visible =false;
    aa1.visible =false;
    aa2.visible =false;
    aa3.visible =false;
  }
  if(mousePressedOver(aaa2)){
    background(bg5);
    gameState="level2";
  }
  
  if(gameState==="level2"){
    background(bg5);
    a1.visible =false;
    a2.visible =false;
    a3.visible =false;

    aa1.visible =false;
    aa2.visible =false;
    aa3.visible =false;

    aaa1.visible =false;
    aaa2.visible =false;
  }
  drawSprites();

}

