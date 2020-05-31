class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

class Walker {
    constructor(x, y, rad, color) {
        this.pos = createVector(x, y);
        this.vel = createVector(-1, -1);
        this.rad = rad;
        this.color = color;
    }
}

class Walkers {
    constructor(walkers) {
        this.walkers = walkers;
        this.registered = [];
    }

    update() {
        this.registered = [];

        this.walkers.forEach(walker => {

            if (walker.pos.x >= width - walker.rad / 2)
                walker.vel.x += -1;
            if (walker.pos.x <= 0 + walker.rad / 2)
                walker.vel.x += 1;

            if (walker.pos.y >= height - walker.rad / 2)
                walker.vel.y += -1;
            if (walker.pos.y <= 0 + walker.rad / 2)
                walker.vel.y += 1;

            walker.pos.add(walker.vel);

            if (this.registered.some(p => p.x >= (walker.pos.x - walker.rad / 2) && p.x < (walker.pos.x + walker.rad / 2) &&
                p.y >= (walker.pos.y - walker.rad / 2) && p.y < (walker.pos.y + walker.rad / 2))) {
                walker.pos.x += -1;
                walker.pos.y += -1;
            }
            this.registered.push(walker.pos);
        });
    }

    show() {
        stroke(0);
        strokeWeight(0);
        this.walkers.forEach(walker => {
            ellipse(walker.pos.x, walker.pos.y, walker.rad);
            fill(walker.color.r, walker.color.g, walker.color.b);
        });
    }
}