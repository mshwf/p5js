class MyMoverForce {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = 15;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    edges() {
        if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
        }

        if (this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        } else if (this.pos.x <= this.r) {
            this.pos.x = this.r;
            this.vel.x *= -1;
        }
    }

    update() {
        // let mouse = createVector(mouseX, mouseY);
        // this.acc = p5.Vector.sub(mouse, this.pos);
        // this.acc.setMag(0.1);

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}



let moverF;
class MyMoverForceGame {

    setup() {
        createCanvas(400, 400);
        moverF = new MyMoverForce(200, 200);

    }
    play() {
        background(0);

        if (mouseIsPressed) {
            let wind = createVector(5, 0);
            moverF.applyForce(wind);
        }

        let gravity = createVector(0, 1);
        moverF.applyForce(gravity);

        moverF.update();
        moverF.edges();
        moverF.show();
    }
}
