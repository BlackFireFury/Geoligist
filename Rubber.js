class Rubber{

    constructor(x, y, r) {
        var options = {
            'restitution':1.5,
            'friction':5.0,
            'density':1.0
        }
    this.body = Bodies.rectangle(x, y, r, r, options);
    this.width = r;
    this.height = r;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("green");
    fill(255);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}
