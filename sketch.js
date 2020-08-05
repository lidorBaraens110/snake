var s;
var scl = 20;
var food;
var gameOver = false;
var score = 0;
var tackle;
function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(10);
	pickLocation();
	pickTackleLocation();
}

function draw() {
	score = s.tail.length * 10;
	background(51);
	if (!gameOver) {

		s.gameOver = false;
		s.show();
		s.update();

		if (s.eat(food)) {
			pickLocation();
		}
		s.score();
		s.death();
		fill(255, 0, 100);
		rect(food.x, food.y, scl, scl);
		fill(0);
		rect(tackle.x, tackle.y, scl * 2, scl);
		//s.through();
	}
	else {
		s.lose();
		pickTackleLocation();
	}
}


function mousePressed() {
	s.total++;
}
function pickTackleLocation() {
	var cols = floor(width / scl);
	var rows = floor(height / scl);
	tackle = createVector(floor(random(cols)), floor(random(rows)));
	tackle.mult(scl);
}
function pickLocation() {
	var cols = floor(width / scl);
	var rows = floor(height / scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW && (s.ySpeed !== 1 || s.tail.length === 0)) {
		s.dir(0, -1);
	}
	if (keyCode === DOWN_ARROW && (s.ySpeed !== -1 || s.tail.length === 0)) {
		s.dir(0, 1);
	}
	if (keyCode === RIGHT_ARROW && (s.xSpeed !== -1 || s.tail.length === 0)) {
		s.dir(1, 0);
	}
	if (keyCode === LEFT_ARROW && (s.xSpeed !== 1 || s.tail.length === 0)) {
		s.dir(-1, 0);
	}
	if (keyCode === ENTER) {
		gameOver = false;
	}
}
