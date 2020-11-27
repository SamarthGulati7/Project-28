
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5;
var engine,world;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	mango1=new Mango(200,200,20);
    ground1=new Ground(400,690,800,20);

  
}


function draw() {
  Engine.update(engine);	
  background(0);
  
  mango1.display();
  ground1.display();
}



