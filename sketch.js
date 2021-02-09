var player, person, sun, face;
var building, buildingPic;
var zombieR, zombieRT, zR, zombieRGroup, zombieL, zL, zombieLGroup, zombieRTopGroup, zombieLTopGroup;
var roof, platform1, platform2, ground;
var bullet, bulletGroup, gunshot, music;
var gameState = 0;
var fakeWallR, fakeWallL;
var test = true

function preload(){
  person = loadImage("images/guy.png");
  buildingPic = loadImage("images/building.png");
  zR = loadImage("images/zombieR.png");
  zL = loadImage("images/zombieL.png");
  gunshot = loadSound("sounds/gunshot.mp3");
  face = loadImage("images/yellow_circle.png");
  //music = loadSound("sounds/moosike.mp3")
}

function setup() {
  createCanvas(1600,800);
  ground = createSprite(800,790,1600,20);
  ground.shapeColor = rgb(77,77,77);
  building = createSprite(800,455,100,500);
  building.debug = true;
  building.addImage("buildingPic", buildingPic);
  building.scale = 1.3;
  platform1 = createSprite(280,400,560,20);
  platform1.shapeColor = rgb(77,77,77);
  platform2 = createSprite(1320,400,560,20);
  platform2.shapeColor = rgb(77,77,77);
  fakeWallL = createSprite(580,390,1,1);
  fakeWallL.shapeColor = (77,77,77);

  player = createSprite(560,745,20,40);
  player.addImage("person", person);

  sun = createSprite(1400,100,0,0);
  sun.addImage("face", face);

  zombieRGroup = createGroup();
  zombieLGroup = createGroup();
  zombieLTopGroup = createGroup();
  zombieRTopGroup = createGroup();
  bulletGroup = createGroup();

  //console.info(buildingPic.height);
  //console.info(building.width);
}

function draw() {
  background("#7c7c7c");
  player.velocityX = 0;
  
  if (test === true){
    if(keyIsDown(LEFT_ARROW)){
      player.velocityX = -8;
    }

    if(keyIsDown(RIGHT_ARROW)){
      player.velocityX = 8;
    }
    
  }

  if(zombieRGroup.isTouching(building)){
    zombieRGroup.setVelocityXEach(0);
  }
  if(zombieRTopGroup.isTouching(fakeWallL)){
    zombieRTopGroup.setVelocityXEach(0);
  }

  if(player.x<=100){
    player.x=100;
  }

  if(player.x>=1500){
    player.x=1500;
  }

  if(player.x == 560 && player.y == 355){
    player.x=560;
  }

  if(player.x == 1040 && player.y == 355){
    player.x=1040;
  }

  if(keyIsDown(UP_ARROW) && (player.x < 560 || player.x > 1040)){
    player.y = 355;
  }

  if(keyIsDown(DOWN_ARROW) && (player.x < 560 || player.x > 1040)){
    player.y = 745;
  }

  //music.play();
  
  drawSprites();
  spawnLeftLowerZombies();
  spawnLeftUpperZombies();
}

function spawnLeftLowerZombies(){
  if(frameCount % 180 === 0) {
    zombieR = createSprite(-10,755,20,40);
    zombieR.addImage("zR", zR);
    //zombieR.debug = true;
    zombieR.setCollider("rectangle",0,0,zombieR.width-35,zombieR.height);
    zombieR.velocityX = 10;
    zombieR.lifetime = 10000;
    zombieRGroup.add(zombieR);
    
    
  }
}

function spawnLeftUpperZombies(){
  if(frameCount % 180 === 0) {
    zombieRT = createSprite(-10,365,20,40);
    zombieRT.addImage("zR", zR);
    //zombieR.debug = true;
    zombieRT.setCollider("rectangle",0,0,zombieRT.width-35,zombieRT.height);
    zombieRT.velocityX = 10;
    zombieRT.lifetime = 10000;
    zombieRTopGroup.add(zombieRT);
    
  }
}