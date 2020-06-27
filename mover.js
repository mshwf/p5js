
var mover;
class MoverGame {
  setup() {
    mover = new Mover(200, 200);
  }
  play() {
    mover.update();
    mover.show();
  }
}


class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(5, 5);
    this.vel.mult(random(3));
  }
  update() {
    this.acc = p5.Vector.random2D();

    this.vel.add(this.acc);
    this.vel.limit(2);
    this.vel = this.vel.add(p5.Vector.random2D());
    this.pos.add(this.vel);
  }

  show() {
    stroke(1000, 0, 0);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 3);
  }
}


