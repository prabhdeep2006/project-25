const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box,box_img;
function preload()
{
	box_img=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	 
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground=Bodies.rectangle(400,680,800,10,{isStatic:true});
	World.add(world,ground);
	
	box1 = new Box(500,580,20,200);
	box2 = new Box(600,670,200,20);
	box3 = new Box(700,580,20,200);
	box=Bodies.rectangle(600,600,200,200,{isStatic:true});
	World.add(world,box);
	paper = new Paper(150,200,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,800,10);
  
  background(255);

  
  box1.display();
  box2.display();
  box3.display();
  imageMode(CENTER);
  image(box_img,box.position.x,box.position.y,200,200);
  paper.display();
   drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-20});
	}
}

