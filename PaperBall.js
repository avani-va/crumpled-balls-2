class PaperBall {
  constructor(x, y, r) {
    var options = {
      'restitution':0.1,
      'friction': 1.5,
      'density': 1.0
    };
    this.image = loadImage("Sprites/paperball.png");
    this.radius = r;
    this.body = Bodies.circle(x, y, r, options);

    World.add(world, this.body);

  };
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    //ellipse(0, 0 , this.radius * 2, this.radius * 2);
    image(this.image, 0, 0, this.r * 2, this.r * 2);
    pop();
  };
};
