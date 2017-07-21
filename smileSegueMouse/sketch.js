//Smile que segue o mouse!

//Variáveis
var smileX;
var smileY;

function setup() {
  createCanvas(800,600);
  strokeWeight(15);
}

function draw() {
  //preenche o funco com a cor roxa
  background(100,0,150);
  
  //atualiza as variaveis smileX e smileX com as posicao horizontal e vertical do mouse
  smileX = mouseX;
  smileY = mouseY;
  
  //esse bloco de código desenha um smile a partir das variáveis smileX e smileY.
  noStroke();
  fill(255,250,0);
  ellipse(smileX,smileY,300,300);
  fill(0);
  ellipse(smileX-75,smileY-50,30,30);
  ellipse(smileX+75,smileY-50,30,30);
  noFill();
  stroke(0);
  arc(smileX,smileY,150,150,0,PI);
}