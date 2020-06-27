var roofY;
var accVal = 1;

class MyGame {
    setup() {
        background(51);
        roofY = height / 2 - 13;

        this.pos = createVector(20, roofY);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        stroke(255, 255, 255);
        line(0, height / 2, width, height / 2);
    }

    play() {
        background(51);
        this.addForce(0, 0.3);


        line(0, height / 2, width, height / 2);
        square(this.pos.x, this.pos.y, 10);

        if (keyIsDown(UP_ARROW)) {
            this.up();
            this.pos.add(createVector(0, 0.1));
        }
        // if (keyIsDown(DOWN_ARROW)) {
        //     this.down();
        // }

        // if (keyIsDown(RIGHT_ARROW)) {
        //     this.right();
        // }

        // if (keyIsDown(LEFT_ARROW)) {
        //     this.left();
        // }
        this.update();
        this.edges();
    }
    shifting() {
        var newAcc = 5 * accVal;
        accVal += .01;
        return newAcc;

        // this.acc.mult(5);
        // this.updateMotion();

    }
    addForce(x, y) {
        this.acc.add(createVector(x, y));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }
    up() {
        if (this.pos.y > 0)
            this.pos.y -= this.shifting();
        // this.addForce(0, -0.3);
    }
    // down() {
    //     if (this.pos.y < roofY)
    //         this.pos.y += this.shifting();
    // }
    right() {
        if (this.pos.x < width)
            this.pos.x += this.shifting();
    }
    left() {
        if (this.pos.x > 0)
            this.pos.x -= this.shifting();
    }

    update() {
        square(this.pos.x, this.pos.y, 10);
    }


    edges() {
        if (this.pos.y >= roofY) {
            this.pos.y = roofY;
            this.vel.y *= -1;

        }
        // if (this.pos.x >= width) {
        //     this.pos.x = widt;
        //     this.vel.x *= -1;
        // }
        // else if (this.pos.x <= this.r) {
        //     this.pos.x = this.r;
        //     this.vel.x *= -1;
        // }
    }

    keyReleased() {
        // this.acc.add(createVector(0, -5));
        // this.vel.add(this.acc);
        // this.pos.add(this.vel);

        // accVal = 0;
        return false; // prevent any default behavior
    }
}

function keyReleased() {
    return game.keyReleased();
}