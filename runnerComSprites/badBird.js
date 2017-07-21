var badBird;
var badBirdActive = false;

var setupBadBird = function(){
  badBird = createSprite(width+150,height/3.5,35,35);
  enemies.add(badBird);
}

var resetBadBird = function(){
  badBird.velocity.x = 0;
  badBird.velocity.y = 0;
  badBird.position.x = width+150;
  badBird.position.y = height/3.5;
  badBirdActive = false;
}

var updateBadBird = function(){
  if(!badBirdActive){
    if(frameCount%701 == 700){
      badBirdActive = true;
    }
  }else{
      badBird.velocity.x = -2;
      badBird.velocity.y = Math.sin(radians(frameCount*2))*4;
      if(badBird.position.x<-150){
        resetBadBird();
      }
      badBird.overlap(shot,function a(){resetBadBird();killShot();});
    }
  }

var drawBadBird = function(){
  if(badBirdActive){
    fill(255,0,0);
    rect(badBird.position.x,badBird.position.y,badBird.originalWidth,badBird.originalHeight);
  }
}