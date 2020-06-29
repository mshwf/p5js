var sqrInitY;
var lineY;

class MyGame {
    setup() {
        background(51);
        lineY = height - 20;
        sqrInitY = lineY - 13;
        this.resetPos();
        stroke(255, 255, 255);
    }
    resetPos() {
        this.pos = createVector(20, sqrInitY);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

    }

    play() {
        background(51);
        line(0, lineY, width, lineY);
        square(this.pos.x, this.pos.y, 10);

        // this.acc.add(gravity);

        this.update();
        this.edges();

        if (keyIsDown(UP_ARROW)) {
            var v = createVector(0, -1.5);
            if (this.vel.y <= -3)
                v = createVector(0, 0);
            this.acc.add(v);
            console.log(this.vel.y);
            this.vel.add(this.acc);
            this.pos.add(this.vel);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.resetPos();
        }
    }


    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, .1);
        square(this.pos.x, this.pos.y, 10);
    }

    edges() {
        if (this.pos.y >= sqrInitY) {
            this.pos.y = sqrInitY;
            this.vel.y *= -2;
        }
    }
}
