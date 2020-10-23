var car,wall;
var speed,weight;
var green;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  
  car.velocityX=speed;

  car.collision=wall;






}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x < (car.width+wall.width)/2 )
  {
    car.velocityX=0;
    var deformation=0.5*width*speed*speed/22509;
    if(defomation<100){
      car.shapecolor=color(0,225,0);
    }
  }
  drawSprites();
}