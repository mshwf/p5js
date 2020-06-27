var sWidth;
var sHeight;
var xAxis = true;
var x;
var y;
var val;



function spiral() {
    // frameRate(10);
    if (x === width / 2 && y === height / 2)
        noLoop();
    if (xAxis) {
        if (x < width / 2) {
            while (x < sWidth) {
                stroke(random(0, 255), random(0, 255), random(0, 255));
                strokeWeight(6);
                point(x, y);
                x += val;
            }
        }
        else {
            while (x > sWidth) {
                stroke(random(0, 255), random(0, 255), random(0, 255));
                strokeWeight(6);
                point(x, y);
                x -= val;
            }
        }
    }

    else {
        if (y < height / 2) {
            while (y < sHeight) {
                stroke(random(0, 255), random(0, 255), random(0, 255));
                strokeWeight(6);
                point(x, y);
                y += val;
            }
        }
        else {
            while (y > sHeight) {
                stroke(random(0, 255), random(0, 255), random(0, 255));
                strokeWeight((6));
                point(x, y);
                y -= val;

            }
        }
    }

    if (!xAxis) {
        if (y > height / 2)
            sHeight = Math.abs(height - sHeight + (val / 2));
        else
            sHeight = Math.abs(height - sHeight - (val / 2));
    }

    else {
        if (x > width / 2)
            sWidth = Math.abs(width - sWidth + (val / 2));
        else
            sWidth = Math.abs(width - sWidth - (val / 2));
    }
    xAxis = !xAxis;
}