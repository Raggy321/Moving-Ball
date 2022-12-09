var ball 

function setup() {
  createCanvas(windowWidth,windowHeight);
  ball = createSprite(750,400,70,70)
  ball.shapeColor = "green"
}

function draw() 
{
background("red");

if (keyIsDown(RIGHT_ARROW)){
ball.x = ball.x+5
console.log(ball.x)
}
if (keyIsDown(LEFT_ARROW)){
  ball.x = ball.x-5
  console.log(ball.x)
  }
drawSprites();
}




