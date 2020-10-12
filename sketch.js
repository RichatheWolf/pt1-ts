const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  // stand
  base1 = new base(400, 350, 700, 50)
  // bottom level of pyramid
  brick1 = new block()
  brick2 = new block()
  brick3 = new block()
  brick4 = new block()
  brick5 = new block()
  // middle level
  brick6 = new block()
  brick7 = new block()
  brick8 = new block()
  // top block
  brick8 = new block()
}

function draw() {
  background(255,255,255);


  base1.display()

  drawSprites();
}