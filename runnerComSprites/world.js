//world
var ground;
var groundLine;
var drawGround = function(){
    fill(25);
    rect(ground.position.x,ground.position.y,ground.originalWidth,ground.originalHeight);
  }
var setupWorld = function(){
  groundLine = height*0.9;
  ground = createSprite(width/2,groundLine+(height-groundLine)/2,width,height-groundLine);
}

var drawBg = function(){
  line(width - ((frameCount * 10) % width), 0, width - ((frameCount * 10) % width), height * 0.9);
}

var GRAVITY = 0.4;