var v;
function setup_randomVectors() {
    v = createVector(0, 100);
}
function randomVectors() {

    v.setMag(100);
    line(0, 0, v.x, v.y);
    v.add(20, 10);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    // console.log(`x= ${v.x}, y= ${v.y}`);
}