var bg, bgImg;
var balloon, balloonImg;

function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    //displaying background
    bg = createSprite(windowWidth/2, windowHeight/2);
    bg.addImage(bgImg);
    bg.scale = 1.35

    //creating balloon     
    balloon = createSprite(100,200,50,100);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale = 0.4;



}

function draw() {
    background("black");
    if(keyIsDown(UP_ARROW) && balloon.y>80){
        balloon.y -=5;
      }
    
      if(keyIsDown(DOWN_ARROW) && balloon.y<500){
        balloon.y +=5;
      }
    
      if(keyIsDown(RIGHT_ARROW)){
        balloon.x +=5;
      }
    
      if(keyIsDown(LEFT_ARROW)){
        balloon.x -=5;
      }
    drawSprites();
        
}