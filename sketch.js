var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 300, 80, 30);
  movingRect.shapeColor= "blue";
  fixedRect.shapeColor= "blue";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "red";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "red";
}

function draw() {
  background(255,255,255); 
  movingRect.x =  World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor= "green";
    gameObject2.shapeColor= "green";
  }
  else{
    movingRect.shapeColor= "blue";
    gameObject2.shapeColor= "red";
  }
  drawSprites();
}
