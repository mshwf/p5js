var sqr;
var sqrY;
var sqrInitY;
var accVal = 1;

class MyGame {
    setup() {
        background(51);
        sqrInitY = height / 2 - 13;
        sqrY = sqrInitY;

        this.pos = createVector(20, sqrY);
        stroke(255, 255, 255);
        line(0, height / 2, width, height / 2);
    }

    play() {
        background(51);

        line(0, height / 2, width, height / 2);
        sqr = square(this.pos.x, this.pos.y, 10);

        if (keyIsDown(UP_ARROW)) {
            this.up();
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.down();
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.right();
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.left();
        }
        this.update();
    }
    shifting() {
        var newAcc = 5 * accVal;
        accVal += .01;
        return newAcc;
    }

    up() {
        if (this.pos.y > 0)
            this.pos.y -= this.shifting();
    }
    down() {
        if (this.pos.y < sqrInitY)
            this.pos.y += this.shifting();
    }
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
    keyPressed() {
        if (keyCode === UP_ARROW) {
            up();
        }
        else if (keyCode === RIGHT_ARROW) {
            right();

        } else if (keyCode === LEFT_ARROW) {
            left();
        }
        else if (keyCode === DOWN_ARROW) {
            down();
        }
        update();
    }

}

function keyReleased() {

    accVal = 0;
    return false; // prevent any default behavior
}