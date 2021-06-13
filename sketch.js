const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;


var gameState="onSling";

var score = 0;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

  



    ground = new Ground(600,height,1200,20);
    platform = new Ground(120, 505, 250, 200);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig3 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,70,70);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);

    

    bird = new Bird(204,240);

    slingShot1 = new Slingshot(bird.body,{x:204,y:240});

    
    
      
}


function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    
   
    platform.display();

    pig1.score();
    pig3.score();
    
    slingShot1.display();
    bird.display();
   
    push();
    strokeWeight(20);
    textSize(21);
    fill("white");
    text("score: "+score,1000,50)
    
    pop();
    
    
}

function mouseDragged(){

    if(gameState==="onSling"){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})

    }

}

function mouseReleased(){
gameState="released";
   slingShot1.fly();
   


}

function keyPressed(){

    if(keyCode===32&&bird.body.speed<2){
        Matter.Body.setPosition(bird.body,{x:190,y:240})
        slingShot1.attach(bird.body);
        bird.trajectory=[];
        gameState="onSling";
    }
}


async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var jsonTime = await response.json();
    // console.log(jsonTime);

    var time = jsonTime.datetime;
    

    var hour = time.slice(11,13);
    console.log(hour);

    if(hour>=6 && hour<=17){
        backgroundImg = loadImage("sprites/bg.png");
    }else {
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}






