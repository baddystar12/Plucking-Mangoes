
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5;
var mangoImage1, mangoImage2, mangoImage3, mangoImage4, mangoImage5;
var boy1, boyImage;
var stone1, stoneImage;
var tree1, treeImage;

function preload(){
boyImage = loadImage("Plucking mangoes/boy.png");
mangoImage1 = loadImage("Plucking mangoes/mango.png");
}


function setup() {
	createCanvas(800, 700);
boy1 = createSprite(50, 600, 50, 50);
boy1.addImage(boyImage);
boy1.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(50, 50, 50, 50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  Engine.update(engine);

  mango1.display();
  imageMode(CENTER);
  image(mangoImage1, 50, 50, 50, 50);
  
  drawSprites();
 
}



