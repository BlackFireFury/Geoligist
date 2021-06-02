const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, rubber, iron;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  hammer = new Hammer (300,200,100,30);
  rubber = new Rubber (650,100,55);
  ground = new Basic (400,690,750,20);
	iron = new Iron (150,250,100,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display();
rubber.display();
ground.display();
iron.display();
 
}



