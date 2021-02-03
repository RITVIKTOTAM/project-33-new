class Plinko{
  constructor(x, y, width) {
   
      var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':15.5,
        'density':30.2
    }
    
    
    this.body = Bodies.circle(x, y, 5, options);
    this.width = width;
    World.add(world, this.body);
    
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    ellipseMode(RADIUS);
    ellipse(0, 0, 5,5);
    pop();
  }
};
