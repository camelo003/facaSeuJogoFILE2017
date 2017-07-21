var bolinha;

function setup() {
  createCanvas(500,500);
  bolinha = 1;
}

function draw() {
  switch(bolinha){
    case 1:
      background(255,0,0);
      break;
    case 2:
      background(0,255,0);
      break;
    case 3:
      background(0,0,255);
      break;
    default:
      background(0);
  }
}

function keyPressed(){
  bolinha = bolinha+1;
  if(bolinha > 3){
    bolinha=0;
  }
  print(bolinha);
}