let walkers;


let balls = 10;
var distance;
let pos;
var x;
var y;
var val;
function setup_randomWalker() {
    background(0);
    var mWalkers = [];
    for (var i = 0; i < balls; i++) {
        mWalkers.push(new Walker(
            (random(0, width)),
            (noise(0, height)),
            map(noise(i), 0, 1, 5, 50),
            new Color(random(0, 255), random(0, 255), random(0, 255))
        ));
    }
    walkers = new Walkers(mWalkers);
    x = 0;
    pos = createVector(width / 2, height / 2);
    y = 0;
    distance = 10;
    val = 20;
    pixelDensity(1);
}


function randomWalker() {
    background(51);
    walkers.show();
    walkers.update();

}