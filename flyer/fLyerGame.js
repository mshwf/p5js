const side = 12;
var balls_count = 2;
var survived;
var finished;
var flashs;
class FLyerGame {
    setup() {
        survived = true;
        finished = false;

        flashs = document.getElementsByClassName('colorDiv');
        this.setFlash('black');
        document.getElementById('number').value = balls_count;
        document.getElementById('spillBtn').addEventListener('click', this.spillBalls);
        stroke(0);
        strokeWeight(0);

        this.setupBalls();
        this.resetPos();
    }
    setFlash(color) {

        [].forEach.call(flashs, function (el) {
            el.style.backgroundColor = color
        });
    }
    resetPos() {
        this.acc = createVector(0, 0);
        this.vel = createVector(0, 0);
        this.pos = createVector(20, height - side);
    }
    setupBalls() {
        document.getElementById("balls-sec").style.display = "table";
        var mBalls = [];
        for (var i = 0; i < balls_count; i++) {
            mBalls.push(new Ball(
                (random(width)),
                (noise(height)),
                map(noise(i), 0, 1, 5, 50),
                new Color(Math.round(random(0, 255)), Math.round(random(0, 255)), Math.round(random(0, 255)))
            ));
        }
        this._balls = new Balls(mBalls);
    }
    play() {
        background(51);
        this._balls.show();
        this._balls.update();
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

        // if (!finished)
        this.intersect();
    }
    intersect() {
        this.setFlash("black");
        for (var i = 0; i < balls.length; i++) {
            var ball = balls[i];
            if (ball.color.r == lastFill.r && ball.color.g == lastFill.g && ball.color.b == lastFill.b) {
                var rad = ball.dim / 2;

                var left = Math.min(this.pos.x, ball.pos.x - rad);
                var right = Math.max(this.pos.x + side, ball.pos.x + rad);

                var top = Math.min(this.pos.y, ball.pos.y - rad);
                var down = Math.max(this.pos.y + side, ball.pos.y + rad);
                var touched = rad + (side / 2);
                var randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
                if (right - left > down - top) {
                    //compare with horizontal
                    if (Math.abs(ball.pos.x - (this.pos.x + (side / 2))) <= touched) {
                        this.setFlash(randomColor);
                        survived = false;
                    }
                }

                else {
                    //compare with vertical
                    if (Math.abs(ball.pos.y - (this.pos.y + (side / 2))) <= touched) {
                        this.setFlash(randomColor);
                        survived = false;
                    }
                }
            }
        }
    }


    edges() {
        if (this.pos.y >= height - side) {
            this.pos.y = height - side;
            this.vel.y *= -.2;
        }

        if (this.pos.y <= 0) {
            this.pos.y = 0;
            this.vel.y *= 0;
            if (survived) {
                // this.playCongrates();
            }
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
    playCongrates() {
        finished = true;
        flashs.style.backgroundColor = 'red';
        this.setup();
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
