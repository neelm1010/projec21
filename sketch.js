var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=rgb(80,80,80);
speed=7;
}

function draw() {
  background(0);  
  bullet.velocityX=speed;
  speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
if(hasCollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
wall.shapecolor=rgb(255,0,0)

}
if(damage<10){
  wall.shapeColor=rgb(0,255,0)
}
}

    
      if(wall.x-bullet.x<(bullet.width+wall.width)/2){
        var deformation=0.5*weight*speed*speed/22500
        bullet.collide(wall)
      if (deformation<100) {
        bullet.shapeColor=rgb(0,255,0)
      }
      if (deformation<180&&deformation>100) {
        bullet.shapeColor=rgb(230,230,0)
      }
      if (deformation>180) {
        bullet.shapeColor=rgb(255,0,0)
      }
    }
    
  
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge= bullet.x+bullet.width;
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}