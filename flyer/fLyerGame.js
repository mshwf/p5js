var sqrInitY;
var lineY;
var side;
var balls_count = 3;
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
        for (var i = 0; i < balls.length; i++) {
            let ball = balls[i];
            var rad = ball.dim / 2;

            var left = Math.min(this.pos.x, ball.pos.x - rad);
            var right = Math.max(this.pos.x + side, ball.pos.x + rad);

            var top = Math.min(this.pos.y, ball.pos.y - rad);
            var down = Math.max(this.pos.y + side, ball.pos.y + rad);
            var touched = rad + (side / 2);

            var colorDiv = document.getElementById('colorDiv');
            if (right - left > down - top) {
                //take x
                if (Math.abs(ball.pos.x - (this.pos.x + (side / 2))) <= touched) {
                    colorDiv.style.backgroundColor = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
                }
                else {
                    colorDiv.style.backgroundColor = 'black';
                }
            }

            else {
                //take y
                if (Math.abs(ball.pos.y - (this.pos.y + (side / 2))) <= touched) {
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
