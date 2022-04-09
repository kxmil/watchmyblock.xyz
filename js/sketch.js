let cell;

function preload() {
  cell = loadModel('./assets/cell1.obj');
}

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  ambientLight(77, 82, 255);
  push();
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  model(cell);
  pop();
}