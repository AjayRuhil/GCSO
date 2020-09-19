var car,wall

var speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

 car=createSprite(50, 200, 50, 50);
 car.velocityX=speed

 wall=cerateSprite(1500,200,60,height/2)
 wall.shapeColor(80,80,80)
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/2
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
    if(deformation>180){
      car.shapeColor=(255,0,0)
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=(230,230,0)
    }
  }
  drawSprites()
