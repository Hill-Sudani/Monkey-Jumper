var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivaltime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(40,160,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(300,185,600,10);
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  if(keyDown("space")&&monkey.y===149.3)
  {
     monkey.velocityY = -7;
  }
  monkey.velocityY = monkey.velocityY+0.3;
  
  survivaltime = Math.round(frameCount/30);
  
  bananas();
  obstacles();
  textSize(20);
  text("Survival Time = "+survivaltime,200,20)

  if(obstacleGroup.isTouching(monkey))
  {
    obstacle.velocityX = 0;
    banana.velocityX = 0;
    banana.lifetime = -1;
    obstacle.lifetime = -1;
  }

  drawSprites();
}

function bananas()
{
  if(frameCount%80==0)
  {
    banana = createSprite(650,Math.round(random(100,0)),10,10);
    banana.velocityX = -7;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 100;
    
    banana.depth = monkey.depth;
    monkey.depth = banana.depth+2;
    
    bananaGroup.add(banana);
  }
}

function obstacles()
{
  if(frameCount%100==0)
  {
    obstacle = createSprite(650,165,10,10);
    obstacle.velocityX = -10;
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 100;
    obstacle.scale = 0.1;
    
    obstacleGroup.add(obstacle);
  }
  
}




