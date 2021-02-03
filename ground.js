class Ground {
    constructor(x,y,width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,5,options);
      this.width = width;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(pos.x, pos.y,5,5 );
    }
  };
