var thickness, wall;
var thickness,speed,weight;




function setup() {
  createCanvas(1600,400);
 


speed=random(223,321);
  weight=random(30,50);
thickness=random(22,83)



bullet=createSprite(300,200,20,3)
bullet.shapeColor="white"



  wall=createSprite(1500,200,20,200)
  wall.shapeColor="white"
}

function draw() {
  background("black");  
  bullet.velocityX = speed; 
  

if(iscollided(bullet,wall)){
bullet.velocityX=0
var deformation=0.5*speed*speed*weight/(thickness*thickness*thickness);
if(deformation>10)
{
  wall.shapeColor=color(0,255,0)
}
if (deformation<10){
wall.shapeColor=color(255,0,0)

}
}
  drawSprites();

}
function iscollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}