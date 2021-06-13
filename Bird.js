class Bird extends BaseClass {
  constructor(x,y){
   
    super(x,y,50,50);
    this.visibility=255;
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    this.trajectory=[];
  }

  display() {
    // this.body.position.x = mouseX;
    // this.body.position.y = mouseY;

    if(this.body.position.x>200&&this.body.velocity.x>5){
     var position = [this.body.position.x,this.body.position.y];
     this.trajectory.push(position);
     
    }
    
    this.visibility = this.visibility-1
     for (var i=0;i<this.trajectory.length;i=i+1){
       
     push();
     
     tint(255,this.visibility);
     image(this.smoke,this.trajectory[i][0],this.trajectory[i][1],15,15);

     pop();
    
    }

    super.display();

  }
}
