var trex, trex_running;
var ground, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);

trex.scale = 0.5;
trex.x = 50;


ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width/2;
}

function draw(){
  background("green");
  ground.velocityX = -2;
  console.log(ground.x);

if(keyDown("space")){
  trex.velocityY = 5;
}

trex.velocityY = trex.velocityY + 0.9;

trex.collide(ground);
drawSprites();
}


