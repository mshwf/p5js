var sqrInitY;
var lineY;
var side;
var balls_count = 1;
class FLyerGame {
    setup() {
        this.setupBalls();
        background(51);
        side = 20;
        lineY = height - 20;
        sqrInitY = lineY - 13;
        this.resetPos();
        stroke(255, 255, 255);
    }
    resetPos() {
        this.acc = createVector(0, 0);
        this.vel = createVector(0, 0);
        this.pos = createVector(20, sqrInitY);
    }
    setupBalls() {
        document.getElementById("balls-sec").style.display = "table";
        var mBalls = [];
        for (var i = 0; i < balls_count; i++) {
            mBalls.push(new Ball(
                (random(width)),
                (noise(height)),
                map(noise(i), 0, 1, 5, 50),
                new Color(random(0, 255), random(0, 255), random(0, 255))
            ));
        }
        this._balls = new Balls(mBalls);
    }
    play() {
        // console.log(balls[0].pos.y);
        background(51);
        //
        this._balls.show();
        this._balls.update();

        //
        line(0, lineY, width, lineY);
        square(this.pos.x, this.pos.y, side);

        this.acc.set(0, 0);
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
            var a = createVector(0, 1.5);
            if (this.vel.y > 2)
                a = createVector(0, 0);

            this.acc.add(a);
            this.vel.add(this.acc);
            this.pos.add(this.vel);

        }

        if (keyIsDown(RIGHT_ARROW)) {
            var a = createVector(1.5, 0);
            if (this.vel.x > 2)
                a = createVector(0, 0);

            this.acc.add(a);
            this.vel.add(this.acc);
            this.pos.add(this.vel);
        }

        if (keyIsDown(LEFT_ARROW)) {
            var a = createVector(-1.5, 0);
            if (this.vel.x < -2)
                a = createVector(0, 0);

            this.acc.add(a);
            this.vel.add(this.acc);
            this.pos.add(this.vel);
        }
        this.edges();

        this.intersect();
    }
    intersect() {
        var cSquare = createVector(this.pos.x + (side / 2), this.pos.y + (side / 2));
        for (var i = 0; i < balls.length; i++) {
            var ball = balls[i];

            var minX = Math.min(this.pos.x, ball.pos.x - ball.rad / 2);
            var maxX = Math.max(this.pos.x + side, ball.pos.x + ball.rad / 2);

            var minY = Math.min(this.pos.y, ball.pos.y - ball.rad / 2);
            var maxY = Math.max(this.pos.y + side, ball.pos.y + ball.rad / 2);
            var touched = (ball.rad / 2) + (side / 2);

            var colorDiv = document.getElementById('colorDiv');
            if (maxX - minX > maxY - minY) {
                //take x
                if (Math.abs((ball.pos.x - (ball.rad / 2)) - this.pos.x) <= touched) {
                    colorDiv.style.backgroundColor = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
                }
                else {
                    colorDiv.style.backgroundColor = 'black';
                }
            }

            else {
                //take y
                if (Math.abs((ball.pos.y - (.5 * ball.rad)) - this.pos.y) <= touched) {
                    colorDiv.style.backgroundColor = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
                }
                else {
                    colorDiv.style.backgroundColor = 'black';
                }
            }

        }
    }

    update() {
        // this.vel.add(this.acc);
        // this.pos.add(this.vel);
        // this.acc.set(0, .15);
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

        if (this.pos.x >= width - side) {
            this.pos.x = width - side;
            this.vel.x *= -0.2;
        }

        if (this.pos.x <= 0) {
            this.pos.x = 0;
            this.vel.x *= 0.2;
        }
    }
    spillBalls() {
        var num = document.getElementById("number").value;
        if (num > 200) {
            document.getElementById("number").value = 200;
            num = 200;
            alert('Sorry, you have to pay for extra balls');
        }
        balls_count = num;
        setup();
    }
}
