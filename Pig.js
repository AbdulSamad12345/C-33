class Pig extends BaseClass {
  constructor(x, y){
    
    super(x,y,50,50);
    this.visibility = 255;
    this.image = loadImage("sprites/enemy.png");
  }

  score(){
    if(this.visibility<200&&this.visibility>-100){
        score=score+50;
    }
  }

   display(){

    
    if(this.body.speed<2.5){
       super.display();
    }
    else{
      World.remove(world,this.body);

      push();
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();



    }


    
  }

}