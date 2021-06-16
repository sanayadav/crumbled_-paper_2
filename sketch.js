var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,470,800,15);
	paper = new Paper(20,350,18);
	dustbin1 = new dustbin(550,460);
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  ground.display();
  paper.display();
  dustbin1.display();
  
 
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:9, y:-12})
}
}


