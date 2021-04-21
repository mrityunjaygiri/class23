// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground; 
var box1,box2;



function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

 ground=new Ground(400,390,800,20);

 box1=new Box(200,300,50,50);
 box2=new Box(240,150,50,100);
}

function draw() {
  background(0); 
  Engine.update(myEngine);
  

box1.display();
box2.display();
ground.display();
}
/*

Matter.js

3 object

1. Matter.Engine : this is used to create physics engine 
2. Matter.World : this is used to create the physics world
3. Matter.Bodies : this is used to create objects

*/