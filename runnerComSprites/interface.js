var initInfo = function(){
  if(frameCount < (60*5) && frameCount % 16 < 8){
    textAlign(CENTER);
    textSize(18);
    fill(200);
    text("HIT spacebar to SHOT", width/2, 150);
    text("HOLD spacebar to DASH", width/2, 150+20);
    text("RELEASE spacebar to JUMP", width/2, 150+20*2);
  }  
}