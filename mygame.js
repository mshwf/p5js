var sqrInitY;
var lineY;
var sq_side = 10;
class MyGame {
    setup() {
        this.bubbles = new Balls();

        background(51);
        sq_side = 10;
        lineY = height - 20;
        sqrInitY = lineY - 13;
        this.resetPos();
        stroke(255, 255, 255);
        this.bubbles.setup();
    }
    resetPos() {
        this.acc = createVector(10, 10);
        this.vel = createVector(0, 0);
        this.pos = createVector(20, sqrInitY);
    }

    play() {
        background(51);
        this.bubbles.play();
        line(0, lineY, width, lineY);
        square(this.pos.x, this.pos.y, sq_side);

        this.acc.set(0, .15);
        this.vel.add(this.acc);
        this.pos.add(this.vel);


        if (keyIsDown(UP_ARROW)) {

            var a = createVector(0, -1.5);
            if (this.vel.y <= -2)
                a = createVector(0, 0);
            this.acc.add(a);
            this.vel.add(this.acc);
            this.pos.add(this.vel);
        }

        if (keyIsDown(DOWN_ARROW)) {
            var a = createVector(0, .10);
            if (this.vel.y > 2)
                a = createVector(0, 0);

            this.acc.y += 5;
            this.vel.add(this.acc);
            this.pos.add(this.vel);

        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.acc.set(.2, 0);
            this.vel.add(this.acc);
            this.pos.add(this.vel);
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.acc.set(-.2, 0);
            this.vel.add(this.acc);
            this.pos.add(this.vel);

        }
        this.edges();
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, .15);
    }

    edges() {
        if (this.pos.y >= sqrInitY) {
            this.pos.y = sqrInitY;
            this.vel.y *= -.2;
        }

        if (this.pos.y <= 0) {
            this.pos.y = 0;
            this.vel.y *= 0.2;
        }

        if (this.pos.x >= width - sq_side) {
            this.pos.x = width - sq_side;
            this.vel.x *= -0.2;
        }

        if (this.pos.x <= 0) {
            this.pos.x = 0;
            this.vel.x *= 0.2;
        }
    }
}
