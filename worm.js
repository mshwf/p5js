var inc = 0.01;
var start = 0;
function worm() {
    background(255);
    stroke(255);
    noFill();
    beginShape();
    var xoff = start;
    for (var x = 0; x < width; x++) {
        stroke(255);
        var y = noise(xoff) * 100 + height / 2 + sin(xoff) * height / 2;
        xoff += inc;
        fill(color(noise(x * .2) * 500, noise(x) * 50, noise(x) * 50));
        ellipse(x - 200, y, noise(x) * 100, noise(x) * 100);
    }

    endShape();
    start += inc;
}