
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofobject,rope1,rope2,rope3, rope4,rope5,world,packageBody,bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
  bobDiameter = 50;

	engine = Engine.create();
	world = engine.world;

	roofobject=new roof(400,100,200,20);



  bobObject1 = new bob(200,600,50);
	bobObject2 = new bob(400,600,50);
	bobObject3 = new bob(500,600,50);
	bobObject4= new bob(600,600,50);
	bobObject5 = new bob(700,600,50);




  rope1=new rope(bobObject1.body,roofobject.body,-bobDiameter*2, 0)

	rope2=new rope(bobObject2.body,roofobject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofobject.body,0, 0)
	rope4=new rope(bobObject4.body,roofobject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofobject.body,bobDiameter*2, 0)

	
	Engine.run(engine);
	
}
function draw() {
  rectMode(CENTER);
  background(230);
  roofobject.display();
rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}


 



