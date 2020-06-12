var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  rect1 = createSprite(0, 400,80,30);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(1200, 400,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1.velocityX=5;
  rect2.velocityX=-5;

}

function draw() {
  background(0,0,0);  
  
  bounceOff(movingRect,fixedRect);
  bounceOff(rect1,rect2);

  drawSprites();
}

