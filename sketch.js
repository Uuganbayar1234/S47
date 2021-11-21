var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var enemy, Bird

function preload(){
bgImg = loadImage("assets/bg.png")
Bird = loadImage("assets/obsTop2.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(2000,700)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 2

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.3;

enemy = createSprite(600,350,100,100)
enemy.addImage(Bird)
enemy.scale = 0.2 ;
}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("w")) {
            balloon.velocityY= -6 ;
            
          }
          if(keyDown("a")){
            balloon.velocityX= -3 ;
          }
          if(keyDown("s")){
            balloon.velocityY= 1 ;
          }
          if(keyDown("d")){
            balloon.velocityX= 3 ;
          }
          //adding gravity
           balloon.velocityY = balloon.velocityY+0.1;
   
        drawSprites();
        
}
