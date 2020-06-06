const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, box1, box2, box3, box4, box5;
function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);
  box1 = new Box(690, 320, 70, 70);
  box2 = new Box(660, 320, 40, 40);
  box3 = new Box(630, 320, 40, 40);
  box4 = new Box(600, 320, 40, 40);
  box5 = new Box(570, 320, 40, 40);
  box6 = new Box(660, 290, 40, 40);
  box7 = new Box(630, 290, 40, 40);
  box8 = new Box(600, 290, 40, 40);
  box9 = new Box(640, 260, 40, 40);
  box10 = new Box(610, 260, 40, 40);

  box11 = new Box(625, 230, 40, 40);

  polygon = new Polygon(200, 320, 70, 70);
  slingshot = new SlingShot(polygon.body, { x: 200, y: 100 });
  Engine.run(engine);
}

function draw() {
  background(247, 247, 247);
  Engine.update(engine);
  strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill(rgb(138, 42, 94));
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  fill(rgb(61, 218, 202));
  box11.display();
  polygon.display();
  slingshot.display();
  ground.display();

  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}
