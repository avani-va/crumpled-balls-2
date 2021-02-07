const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Declare variables for game objects and behaviour indicators(FLAGS)
//constants

//var bin1,bin2,bin3;
var ground, paper, dustbin;
var paperballImg, dustbinImg;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(1600, 400);

  engine = Engine.create();
  world = engine.world;

  //bin1 = createsprite();
  //bin2 = createsprite();
  //bin3 = createsprite();

  //Create the class objects Here.
  ground = new Ground(600, 382, 2000, 10);

  paper = new PaperBall(150, 4, 20);

  dustbin = new DustBin(1348, 250, 230, 240);

}

//All changes, conditions, manipulations, actions to be executed and checked continously
// or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background(50);

  Engine.update(engine);

  ground.display();
  dustbin.display();
  paper.display();
  
  drawSprites();
}

// function triggered when any key on keyboard is pressed
function keyPressed() {
 //condition will be true if the key which is pressed is UP ARROW 
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 83, y: -83 });
  }

}
