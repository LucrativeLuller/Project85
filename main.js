//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Give specific height and width to the car image

var carWidth = 100;
var carHeight = 90;
var carImage = new Image();
carImage.src = "car.png";


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
var carX = 10;
var carY = 10;


function add() {
	//upload car, and background images on the canvas.
	function add() {
		ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
	  }
	  
	  add();
	  

}

function uploadBackground() {

	var backgroundImage = new Image();
backgroundImage.src = "background.png";

function uploadBackground() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
  ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
}

	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
function up() {
	if (carY >= 0) {
	  carY -= 10;
	  uploadBackground();
	  uploadgreencar();
	}
  }

  function down() {
	if (carY <= canvas.height - carHeight) {
	  carY += 10;
	  uploadBackground();
	  uploadgreencar();
	}
  }

  function left() {
	if (carX >= 0) {
	  carX -= 10;
	  uploadBackground();
	  uploadgreencar();
	}
  }

function right() {
	if (carX <= canvas.width - carWidth) {
	  carX += 10;
	  uploadBackground();
	  uploadgreencar();
	}
  }


  function add() {
	document.addEventListener("keydown", my_keydown);
	uploadBackground();
	uploadgreencar();
  }

  
  function my_keydown(e) {
	var keyPressed = e.keyCode;
	console.log(keyPressed);
  }
  