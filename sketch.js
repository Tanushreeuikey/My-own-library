var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor = "green";
 

  rect2 = createSprite(200,100,50,50);
  rect2.shapeColor = "green";
  

 rect3 = createSprite(300,100,50,50);
 rect3.shapeColor = "green";
 

  rect4 = createSprite(400,100,50,50);
  rect4.shapeColor = "green";
  
  rect5 = createSprite(1000,100,50,50);
  rect5.shapeColor = "green";

  rect4.velocityX=5;
  rect5.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  

  if(Istouching(movingRect,rect1))
  {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  }
  else
  {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }

  if(bounceOff(rect4,rect5))
  {
    rect4.shapeColor="blue";
    rect5.shapeColor="red";
  }

  drawSprites();
}
