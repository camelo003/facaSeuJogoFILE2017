//inputSuff
var inputStats = "released";
var inputDebug = 0;
function drawStats() {
  if(inputStats == "released"){
    fill(0,150,0);
  }else if(inputStats == "hit"){
    fill(255,255,0);
  }else if(inputStats == "hold"){
    fill(150,0,0);
  }else if(inputStats == "justReleased"){
    fill(0,255,255);
  }else{
    fill(0);
  }
  ellipse(50,50,50,50);
}

function updateInput(){
  if(keyDown(" ")){
    inputStats = "hold";
  }else if(keyWentUp(" ")){
    inputStats = "justReleased";
  }else  if(keyWentDown(" ")){
    inputStats = "hit";
  }else{
    inputStats = "released";
  }
}