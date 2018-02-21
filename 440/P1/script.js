document.write(" <h1> Project One </h1> <p> Tablet Turntable </p>")

var mic

function setup() {
  createCanvas(710, 200);

  mic = new p5.AudioIN();

  mic.start();
}

function draw() {
  background(200);

  var vol = mic.getLevel();
  fill(127);
  stroke(0);

  var h = map(vol, 0, 1, height, 0);
  ellipse(width/2, h - 25, 50, 50);
}
