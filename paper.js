class Paper {
    constructor(x,y,radius){
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.5
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.image=loadImage("paper.png");
    World.add(world,this.body);
    
  }
     display(){
       var p=this.body.position;
       push();
       translate(p.x,p.y);
       imageMode(CENTER);
       image(this.image,0,0,70,70);
       pop();
     }
    }