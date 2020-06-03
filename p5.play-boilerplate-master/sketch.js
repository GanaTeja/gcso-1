var car , wall ; 
var speed , weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  speed=random(55,90);

  weight=random(400,1500);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  car=createSprite(50,200,30,height/2)
  car.velocityX = speed;
  wall=createSprite(1500,200,50,50)
  if(car.isTouching(wall)){
  deformation=0.5*weight*speed*speed/22500

  }
  if(deformation<=100){
    car.fill(0,255,0)

  }
  if(deformation>=100||deformation<=180){
    car.fill(230,230,0)

  }
  if(deformation>=180){
    car.fill(255,0,0)

  }

}