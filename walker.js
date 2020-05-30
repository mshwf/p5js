class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(-2, 1);
        this.rad = 50;

    }

    update() {
        if (this.pos.x >= 400 - this.rad / 2)
            this.vel.x += -1;
        if (this.pos.x <= 0 + this.rad / 2)
            this.vel.x += 1;

        if (this.pos.y >= 400 - this.rad / 2)
            this.vel.y += -1;
        if (this.pos.y <= 0 + this.rad / 2)
            this.vel.y += 1;

        this.pos.add(this.vel);
    }
    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, this.rad);
    }
}