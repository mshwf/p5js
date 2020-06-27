var yoff = 250;
var inc = 0.01;

class Density {
    setup() { }
    play() {
        var yoff = 0;
        loadPixels();

        for (var y = 0; y < height; y++) {

            var xoff = 0;
            for (var x = 0; x < width; x++) {
                var index = (x + y * width) * 4;
                var r = noise(xoff, yoff);
                pixels[index + 0] = noise(xoff, 5) * 255;
                pixels[index + 1] = noise(random(xoff) + 100) * 255;
                pixels[index + 2] = noise() * 255;
                pixels[index + 3] = 255;
                xoff += inc;
            }
            xoff += inc;
        }
        updatePixels();
    }

}