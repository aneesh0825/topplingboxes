const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var side1,side2,side3,paper,ground,bin;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bin= new Bin();
    paper= new Paper(200,200);


   
    ground = new Ground(600,height,1200,20,"white")
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
  bin.display();
  paper.display();

}
function keyPressed(){
  if (keyCode == UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y: -85  })
  }
}
