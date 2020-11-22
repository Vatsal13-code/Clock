var hr,mn,sc

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr = hour();
  mn = minute()
  sc = second()
  angleMode(degrees)
  scAngle = map(sc,0,60,0,360)
}

function draw() {
  background(255,255,255);
    push()
     stroke(255,0,0)
     strokeWeight(7)
     line(0,0,100,0)
     translate()
     rotate(scAngle)
     pop()
  drawSprites();
}