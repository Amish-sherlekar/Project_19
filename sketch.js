var car , wall
var speed , weight
function setup() {
  createCanvas(600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(200,200,50,50)  
   
 speed=random(55,90);
 weight=random(400,1500)
 car.velocityX = speed;
}

function draw() {
  background("black"); 
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*speed*weight*speed/22509;
    if(deformation>180){
      car.shapeColor=rgb(0,255,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=rgb(255,255,0);
    }
    if(deformation<100){
      car.shapeColor=color(255,0,0);
    }
  }
  drawSprites();
}
