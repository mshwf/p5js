var sqrInitY;
var accVal = 1;

class MyGame {
    setup() {
        background(51);
        sqrInitY = height / 2 - 13;
        this.pos = createVector(20, sqrInitY);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        stroke(255, 255, 255);
    }

    play() {
        background(51);
        line(0, height / 2, width, height / 2);
        square(this.pos.x, this.pos.y, 10);

        let gravity = createVector(0, 2);
        this.applyForce(gravity);

        this.update();
        this.edges();

        if (keyIsDown(UP_ARROW)) {
            this.up();
        }
    }

    applyForce(force) {
        this.acc.add(force);
    }

    up() {
        this.acc.add(createVector(0, 2));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }


    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 1);
        square(this.pos.x, this.pos.y, 10);
    }

    keyReleased() {
        this.acc.add(createVector(0, 5));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.edges();
    }

    edges() {
        if (this.pos.y >= height / 2 - 13) {
            this.pos.y = height / 2 - 13;
            this.vel.y *= -1;
        }
    }
}


function keyReleased() {
    return game.keyReleased(); // prevent any default behavior
}