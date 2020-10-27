
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var R1,bobOb1,bobOb2,bobOb3,bobOb4,bobOb5,rope1,rope2,rope3,rope4,rope5;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   R1=new Roof(400,100,750,50);
   bobOb1=new Bob(10,130,40,{'isStatic':true});
   bobOb2=new Bob(290,200,40,{'isStatic':true});
   bobOb3=new Bob(370,200,40,{'isStatic':true});

   bobOb4=new Bob(450,200,40,{'isStatic':true});
   bobOb5=new Bob(530,200,40,{'isStatic':true});

   rope1 = new rope(bobOb1.body,R1.body,-95*2,0);
   rope2 = new rope(bobOb2.body,R1.body,-55*2,0);
   rope3= new rope(bobOb3.body,R1.body,-15*2,0);
   rope4= new rope(bobOb4.body,R1.body,25*2,0);
   rope5= new rope(bobOb5.body,R1.body,65*2,0);
    

	Engine.run(engine);
  
}


function draw() {
  background("white");
 
  R1.display();
  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 keyPressed();

  drawSprites();
 
 
}
function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
      
    Matter.Body.applyForce(bobOb1.body,bobOb1.body.position,{x:-50,y:-45});
    }
}

  
    


