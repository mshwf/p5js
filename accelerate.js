var v;
var mover;
function setup_PlayWithAcc() {
    var initX = 50;
    var initY = 50;
    v = createVector(initX, initY);

    mover = new Mover(0, 0);
}

function playWithAcc() {
    mover.update();
    mover.show();
}