
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;

var treeObj, groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var stone,chain;

function preload(){
	boy=loadImage("Images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

		mango1=new mango(1100,130,30);
		mango2 = new mango(1200,130,32);
		mango3 = new mango(1000,80,35);
		mango4 = new mango(1220,220,33);
		mango5 = new mango(920,170,40);
		mango6 = new mango(950,250,30);
	    mango7 = new mango(1020,170,42);
	    mango8 = new mango(1120,40,33);
	    mango9 = new mango(1150,200,35);
	    mango10 = new mango(1080,200,35);

	treeObj=new tree(1050,580);

	

	stone = new Stone(200,100,30);

	chain = new Chain(stone.body,{x : 255,y : 420});

	groundObject=new ground(650,580,1300,40);
	
	
	Engine.run(engine);

}

function draw() {

  background("lightblue");
 
  textSize(25);

  text("PRESS SPACE TO GET SECOND CHANCE TO PLAY!!",50,50);

  image(boy ,220,340,180,280);
  


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();
  chain.display();
  stone.display();
 
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();

}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
	chain.fly();
}

function detectCollision(lstone,lmango)
{
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance <= lstone.r + lmango.r)
  {
	  Matter.Body.setStatic(lmango.body,false);
  }
}
function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x : 200,y : 200});
		chain.attach(stone.body);
	}
}
