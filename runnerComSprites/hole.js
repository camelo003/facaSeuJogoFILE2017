var hole;
var holeActive = false;

var setupHole = function(){
  hole = createSprite(width+150,groundLine,100,15);
  enemies.add(hole);
}

var resetHole = function(){
  hole.position.x = width+150;
  hole.position.y = groundLine;
  hole.velocity.x = 0;
  hole.velocity.y = 0;
  holeActive = false;
}

var updateHole = function(){
  if(!holeActive){
    if(frameCount%301 == 300){
      holeActive = true;
    }
  }else{
      hole.velocity.x = -5;
      if(hole.position.x<-150){
        resetHole();
      }  
    }
  }

var drawHole = function(){
  fill(255,0,0);
  rect(hole.position.x,hole.position.y,hole.originalWidth,hole.originalHeight);
}