let plank;
let ball;
let gravity = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  plank = createSprite(width / 2, height - 20, 200, 20);
  plank.immovable = true;
  plank.collider = 'static'
  ball = createSprite(width / 2, height / 2, 30, 30);
 
  ball.velocity.x = 2;
  
  ball.onMousePressed = () => {
    ball.velocity.y = -10;
  };

  
  ball.bounciness= 1
}

function draw() {
  noStroke()
  background(209,29,83);
  
  ball.velocity.y += gravity+0.1;
 
  plank.position.x = mouseX
 if(plank.positon>height + plank+height){
  resetScreen();
 }
  
  ball.collide(plank);
  
 

  if (ball.position.y > height + ball.height) {
    resetScreen();
  }
}

function resetScreen() {
  
  ball.position.x = width / 2;
  ball.position.y = height / 2;
  ball.velocity.y = 0;

  plank.position.x = mouseX;
  plank.position.y = height - 20;
  plank.velocity.y = 0;
}
