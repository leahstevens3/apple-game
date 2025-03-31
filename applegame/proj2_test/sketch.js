var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
let b;
let c;

function setup() {
  createCanvas(600, 400);
  a = loadImage("assets/scene1.jpg"); 
  b = loadImage("assets/basket1.jpg"); 
  c = loadImage("assets/red_apple.jpg"); 
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		//background(96, 157, 255)
    image(a, 0,0,600,400)
		fill(6, 64, 22)
		textAlign(CENTER);
    textSize(20);
		text('Catch the Apples in the Basket!', width / 2, height / 2 - 10)
    fill(179, 11, 27)
		text('click to start', width / 2, height / 2 + 30);
		reset();
}

function gameOn(){
	background(255)
  text("Score = " + score, 60,40)
  fill(212, 13, 39);
  image(c, x, y,40,40)
  rectMode(CENTER)
  image(b,mouseX,height-60,70,70)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
		//background(50, 168, 82)
    image(a, 0,0,600,400)
		textAlign(CENTER);
    fill(179, 11, 27)
		text('GAME OVER', width / 2, height / 2 - 15)
    fill(6, 64, 22)
  	text("score = " + score, width / 2, height / 2 + 15)
    fill(179, 11, 27)
		text('click to play again', width / 2, height / 2 + 50);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}