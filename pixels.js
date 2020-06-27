function playWithPixels() {
    loadPixels();
    for (var y = 0; y < height; y++) {

        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = y;
            pixels[index + 1] = random(255);
            pixels[index + 2] = random(255);
            pixels[index + 3] = y * y;

        }
    }
    updatePixels();
}