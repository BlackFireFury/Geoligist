class Basic {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    strokeWeight(4);
    stroke("green");
    fill(255);
    rectMode(CENTER);
    rect(pos.x,pos.y, this.width, this.height);
  }
};
