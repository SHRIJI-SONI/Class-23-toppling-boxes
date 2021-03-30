const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;           // creating an object for box class

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  box1=new Box(200,300,50,50)
  box2=new Box(240,100,50,100)
  ground=new Ground(200,390,400,20)
  //  console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
box1.display();     // called the function display for object box1
box2.display();
ground.display();
}