
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  monkey_stop=loadAnimation("sprite_7.png")
 
}



function setup() {
  createCanvas(500,400)
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-10
  ground.x=ground.x+ground.width/10
  console.log(ground.x)
  ground.visible=true;

 
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  obstacleGroup.collide(ground)
  
  score=0;
}


function draw() {
  background(250)
  text("survival time:"+score,300,10)
  drawSprites();
food();
  createobstacles();
  monkey.collide(ground)
  
  if(keyDown("SPACE")&& monkey.y>=100){
   monkey.y=monkey.y-12
    monkey.y=monkey.y+0.8 
    
                                 
  }
  
  
  
  if(ground.x<300){
    ground.x=200
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(bananaGroup.isTouching(monkey)){
    score=score+1
    
    bananaGroup.destroyEach();
    
  }
  if(obstacleGroup.isTouching(monkey)){
    
    ground.velocityX=0
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    bananaGroup.velocityX=0
    obstacleGroup.velocityX=0
    
  }
}

function food(){
  if(frameCount%150===0){
  banana=createSprite(400,250,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.09
    banana.velocityX=-2
    banana.lifetime=250
    bananaGroup.add(banana)
  }
  
  

}

function createobstacles(){
  if(frameCount%200===0){
    obstacle=createSprite(400,340,10,10)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
    obstacle.velocityX=-2
    obstacle.lifetime=250
    obstacle.collide(ground)
    obstacleGroup.add(obstacle)
  }
  
}

