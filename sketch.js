
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5;
var boyImage;
var stone1;
var tree1;
var ground;
var elastic;

function preload(){
boyImage = loadImage("Plucking mangoes/boy.png");
}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 695, 800, 20);
	tree1 = new Tree(650, 515, 350);
	mango1 = new Mango(560, 470, 40);
	mango2 = new Mango(610, 420, 40);
	mango3 = new Mango(670, 460, 40);
	mango4 = new Mango(750, 455, 40);
	mango5 = new Mango(700, 400, 40);
	stone1 = new Stone(16, 569, 20);
	//elastic = new Elastic(stone.body, {x:150, y:150});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  Engine.update(engine);

  imageMode(CENTER);
  image(boyImage, 60, 625, 150, 250); 
  ground.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
 //elastic.display();
  
  drawSprites();
 
}



