
class Paper {
  constructor(x, y,r) {
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':1.2,
        'density':1.1
    }
    this.r = r;
    this.x = x;
    this.y = y;
    this.image = loadImage("paper.png")
    this.body = Bodies.circle(this.x , this.y , this.r/2, options);
    
    World.add(world, this.body);
  }
  display(){
    var paperpos=this.body.position; 
    push()
     translate(paperpos.x, paperpos.y); 
     imageMode(CENTER);
     image(this.image, 0, this.r/2);
      pop()
     
   
  }
};