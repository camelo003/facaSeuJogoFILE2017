var shot;
var shotActive = false;

var setupShot = function(){
  shot = createSprite(p.position.x,p.position.y,10,10);
}

var updateShot = function(){
  if(shotActive){
    shot.velocity.x = 10;
    checkShot();
  }
}

var checkShot = function(){
  if(shot.position.x > width + (shot.originalWidth/2)){
    killShot();
  }
}

var killShot = function(){
  shotActive = false;
  shot.velocity.x = 0;
}

var doTheShot = function(){
  if(!shotActive){
    shot.position.x = p.position.x;
    shot.position.y = p.position.y;
    shotActive = true;
  }
}

var drawShot = function(){
  if(shotActive){
    fill(0,0,255);
    ellipse(shot.position.x,shot.position.y,shot.originalWidth,shot.originalHeight);
  }
}