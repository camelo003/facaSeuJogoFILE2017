var enemies;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);

  setupP();

  setupWorld();
  
  setupShot();

  enemies = new Group();
  setupHole();
  setupBadBird();
}

function draw() {
  background(50);
  drawBg();
  fill(255, 0, 0);

  drawGround();

  updateInput();
  drawStats();

  updateP();
  showP();
  
  updateShot();
  drawShot();
  
  updateHole();
  drawHole();
  
  updateBadBird();
  drawBadBird();
  
  initInfo();
}