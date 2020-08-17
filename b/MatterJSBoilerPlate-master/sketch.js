var paper;
var ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(600,679,150,10);
	box2 = createSprite(525,657,10,50);
	box3 = createSprite(675,657,10,50);

	paper = new Paper(200,200,25);
	ground = new Ground(400,689,800,10);

	


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(0);
  bounceoff(paper,box1);
  bounceoff2(paper,box2);
  bounceoff3(paper,box3);


 
  paper.display();
  ground.display();
  drawSprites();

  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.Body,paper.Body.Position,{x:85,y:-85});
	}
}

function bounceoff(obj1,obj2){
    if (paper.x - box1.x < box1.width/2 + paper.width/2
      && box1.x -  paper.x < box1.width/2 + paper.width/2) {
    paper.velocityX = paper.velocityX * (-1);
    box1.velocityX = box1.velocityX * (-1);
  }
  if (paper.y - box1.y < box1.height/2 + paper.height/2
    && box1.y - paper.y < box1.height/2 + paper.height/2){
    paper.velocityY = paper.velocityY * (-1);
    box1.velocityY = box1.velocityY * (-1);
  }
}

function bounceoff2(obj1,obj2){
    if (paper.x - box2.x < box2.width/2 + paper.width/2
      && box2.x -  paper.x < box2.width/2 + paper.width/2) {
    paper.velocityX = paper.velocityX * (-1);
    box2.velocityX = box2.velocityX * (-1);
  }
  if (paper.y - box2.y < box2.height/2 + paper.height/2
    && box2.y - paper.y < box2.height/2 + paper.height/2){
    paper.velocityY = paper.velocityY * (-1);
    box2.velocityY = box2.velocityY * (-1);
  }
}

function bounceoff3(obj1,obj2){
    if (paper.x - box3.x < box3.width/2 + paper.width/2
      && box3.x -  paper.x < box3.width/2 + paper.width/2) {
    paper.velocityX = paper.velocityX * (-1);
    box3.velocityX = box3.velocityX * (-1);
  }
  if (paper.y - box3.y < box3.height/2 + paper.height/2
    && box3.y - paper.y < box3.height/2 + paper.height/2){
    paper.velocityY = paper.velocityY * (-1);
    box3.velocityY = box3.velocityY * (-1);
  }
}