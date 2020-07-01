class BallsGame {
    constructor() {
        this.setup();
    }
    setup() {
        document.getElementById("balls-sec").style.display = "table";
        background(0);
        var mBalls = [];
        for (var i = 0; i < balls; i++) {
            mBalls.push(new Ball(
                (random(width)),
                (noise(height)),
                map(noise(i), 0, 1, 5, 50),
                new Color(random(0, 255), random(0, 255), random(0, 255))
            ));
        }
        balls = new Balls(mBalls);
        x = 0;
        pos = createVector(width / 2, height / 2);
        y = 0;
        val = 20;
        pixelDensity(1);
    }
    play() {
        background(51);
        balls.show();
        balls.update();
    }
}

let balls = 10;
let pos;
var x;
var y;
var val;



function spillBalls() {
    var num = document.getElementById("number").value;
    if (num > 200) {
        document.getElementById("number").value = 200;
        num = 200;
        alert('Sorry, you have to pay for extra balls');
    }
    balls = num;
    setup();
}