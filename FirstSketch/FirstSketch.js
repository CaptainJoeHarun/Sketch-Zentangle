function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(frameCount);
  translate(-frameCount,0);
  if (frameCount % 8 < 16) {
    fill(255 - random(190), 30, 255);
  } else {
    fill(255 - random(90), 255, 30);
  }
  rect(90, 10, 90, 10);
}
