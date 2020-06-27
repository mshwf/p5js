var sqr;
var sqrX;
var sqrY;
var sqrInitY;
var accVal = 1;

function setup_mygame() {
    background(51);
    sqrX = 20;
    sqrInitY = height / 2 - 13;
    sqrY = sqrInitY;
    stroke(255, 255, 255);
    line(0, height / 2, width, height / 2);
}
function mygame() {
    sqr = square(sqrX, sqrY, 10);

    if (keyIsDown(UP_ARROW)) {
        up();
    }
    if (keyIsDown(DOWN_ARROW)) {
        down();
    }

    if (keyIsDown(RIGHT_ARROW)) {
        right();
    }

    if (keyIsDown(LEFT_ARROW)) {
        left();
    }
    update();

}
function shifting() {
    var newAcc = 10 * accVal;
    accVal += .2;
    return newAcc;

}
function up() {
    if (sqrY > 0)
        sqrY -= shifting();
}
function down() {
    if (sqrY < sqrInitY)
        sqrY += shifting();
}
function right() {
    if (sqrX < width)
        sqrX += shifting();
}
function left() {
    if (sqrX > 0)
        sqrX -= shifting();
}

function update() {
    square(sqrX, sqrY, 10);
}
function keyPressed() {
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
function keyReleased() {
    accVal = 1;
    // return false; // prevent any default behavior
}