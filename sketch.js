var slider1;
var slider2; 
var slider3;
var slider4;
var canvas;

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	slider1 = createSlider(0, 255, 255);
	slider1.position(10,410);
	slider2 = createSlider(0, 255, 255);
	slider2.position(10,430);
	slider3 = createSlider(0, 255, 255);
	slider3.position(10,450);
	slider4 = createSlider(0, 100, 50);
	slider4.position(10, 470);

}


function draw(){

	frameRate(500);

	fill(slider2.value(), slider1.value(), slider3.value());
	strokeWeight(0);
	//if(mouseIsPressed) ellipse(mouseX, mouseY, slider4.value(), slider4.value());
	if(!mouseIsPressed)
		if(!((mouseX <= slider2.position.x + 10) && (mouseY  <= slider4.position.x + 5))){
			strokeWeight(3);
			ellipse(mouseX, mouseY, slider4.value(), slider4.value());
	}
	// push();
	// strokeWeight(2);
	// ellipse(mouseX, mouseY, slider4.value(), slider4,value());
	// pop();
}

// function mouseDragged(){
// 	noFill();
// 	strokeWeight(4);
// 	stroke(0);
// 	noFill();
// 	ellipse(mouseX, mouseY, 50, 50);
// 	console.log(mouseX);
// 	console.log(mouseY);
	
// }
