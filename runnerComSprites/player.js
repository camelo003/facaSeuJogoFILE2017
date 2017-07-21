//Player
var p;
var pOnGround = false;
var pLife = 100;

var pJump = function(){
  if(pOnGround){
    p.velocity.y = -10;
    pOnGround = false;
  }
}

var setupP = function(){
  p = createSprite(width/2,height/2,25,75);
}

var updateP = function(){
  p.velocity.y += GRAVITY;
  
  if(p.collide(ground)) {
    pOnGround = true;
    p.velocity.y = 0;
  }
  
  if(inputStats=="hit"){
    doTheShot();
  }
  
  if(inputStats=="released"){
    p.velocity.x = -5;
  }
  if(p.position.x<width*0.15){
    p.velocity.x = 0;
  }
  
  if(inputStats=="hold"){
    p.velocity.x = 5;
  }
  if(p.position.x>width*0.8 && inputStats=="hold"){
    p.velocity.x = 0;
  }
  
  if(inputStats=="justReleased"){
    pJump();
  }
  
  if(p.overlap(enemies)){
    pLife = pLife - 5;
    if(pLife < 0){
      pLife = 0;
    }
  }
}

var showP = function(){
  fill(255,102,204);
  noStroke();
  rect(p.position.x,p.position.y,p.originalWidth,p.originalHeight*(pLife/100));
  noFill();
  stroke(0);
  rect(p.position.x,p.position.y,p.originalWidth,p.originalHeight);
}