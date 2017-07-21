var f1, f2, f3, f4; 

function setup() {
  createCanvas(800,600);
  f1 = loadImage("data/frame1.png");
  f2 = loadImage("data/frame2.png");
  f3 = loadImage("data/frame3.png");
  f4 = loadImage("data/frame4.png");
}

function draw() {
  var tempF;

  switch(0){
    case 1:
      tempF = f1;
      break;
    case 2:
      tempF = f2;
      break;
    case 3:
      tempF = f3;
      break;
    case 4:
      tempF = f4;
      break;
  }
  image(tempF,mouseX,mouseY);
}