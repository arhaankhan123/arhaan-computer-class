var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,30,80)
  movingRect=createSprite(10,10,80,40)
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 && 
  	movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2  &&
  	fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y< movingRect.width/2+fixedRect.width/2
  	){
  	movingRect.shapeColor="red"
  	fixedRect.shapeColor="red"
  }
  else{
  	movingRect.shapeColor="green"
  	fixedRect.shapeColor="green"
  }
  drawSprites();

}