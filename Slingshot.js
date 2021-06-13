class Slingshot{
    constructor(bodyA,pB){
       this.sling1 = loadImage("sprites/sling1.png")
       this.sling2 = loadImage("sprites/sling2.png")
       this.sling3 = loadImage("sprites/sling3.png")

       this.pointb=pB
       var options={
           
               bodyA:bodyA,
               pointB:pB,
               stiffness:0.05,
               length:1
           
       }

       this.slingshot=Constraint.create(options);
       World.add(world,this.slingshot);

    }
   
   display(){
       
       image(this.sling1,200,208);
       image(this.sling2,170,208);
       


       if(this.slingshot.bodyA){
        var posA=this.slingshot.bodyA.position
        var posB=this.pointb
        

        if(posA.x<250){
         push();
         strokeWeight(20);
         stroke(48,22,8)
         line(posA.x,posA.y,posB.x-20,posB.y+5);
         line(posA.x,posA.y,posB.x+24,posB.y+5);
         image(this.sling3,posA.x-20,posA.y-10,30,20)
         pop();

        } 
         else {

         push();
         strokeWeight(20);
         stroke(48,22,8)
         line(posA.x,posA.y,posB.x+20,posB.y+5);
         line(posA.x,posA.y,posB.x-24,posB.y+5);
         image(this.sling3,posA.x+5,posA.y-10,20,20)
         pop();
        }

       }

   }

     fly(){
       
        this.slingshot.bodyA=null;
     }

     attach(rope){
       this.slingshot.bodyA=rope;
     }
     
   }