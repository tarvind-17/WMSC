
var wall,thickness;
var bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);

speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50, 200, 50,5);   
bullet.velocityX = speed;
bullet.shapeColor=color(255);



wall=createSprite(1200,200, thickness, height/2);
wall.shapeColor=color(230);

}


function draw() {
  background(0);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var dam = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(dam>10){
      wall.shapeColor=color("red");
      fill(225);
      textSize=50;
      text("fail-rejected",100,100);
    }
else if(dam<10){
  wall.shapeColor=color("green");
  fill(225);
  textSize=50;
  text("success-approved",100,100);
}


  }



  drawSprites();
 
}
function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}





