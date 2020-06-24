var angle = 0;
var slider;
function setup() {
  createCanvas(800, 600);
  slider = createSlider(0,TWO_PI,PI/4,0.01);
}

function draw() {
  background(20);
  var len = 150;
  angle = slider.value();
  translate(width/2,height);
  branch(len,255);
}

function branch(len,col){
  stroke(255);
  line(0,0,0,-len);
  translate(0,-len);
  if(len>4){
    push();
    rotate(angle);
    branch(len*0.75);
    pop();
    push();
    rotate(-angle);
    branch(len*0.75);
    pop();
  }
}