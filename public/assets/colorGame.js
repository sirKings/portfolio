var colors = [];
var correctColor;
var numSquare = 9;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("span");
var messageDisplay = document.querySelector(".control span");
var resetButton = document.querySelectorAll("button")[0];
var modeButtons = document.querySelectorAll("button");

setupModeButtons();
setUpSquares();


var random = Math.floor(Math.random()*numSquare);
correctColor = colors[random];
colorDisplay.textContent = colors[random];

function setUpSquares(){
	colors = generateColors(numSquare);
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display= "none";
		}
	}
	var random = Math.floor(Math.random()*numSquare);
	correctColor = colors[random];
	colorDisplay.textContent = colors[random];
}

function setupModeButtons(){
	for(var i = 1; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			modeButtons[3].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy"){
				numSquare = 3;
			}else if(this.textContent === "Hard"){
				numSquare = 6;
			}else{
				numSquare = 9;
			}
			setUpSquares();
		});
	}
	resetButton.addEventListener("click", function(){
		setUpSquares();
	});
}

for (var i=0; i<squares.length; i++){
squares[i].addEventListener("click", function(){
	if(this.style.background === correctColor){
		for (var i=0; i<squares.length; i++){
		squares[i].style.background = correctColor;
		}
		messageDisplay.textContent="Correct!"
	}else{
		this.style.background = "#0f0f0f";
		messageDisplay.textContent="Wrong!"
	}
});
}


function generateColors(numSquare){
	arr = [];
	var i = 0;
	while(i < numSquare){
		arr.push(randomColor());
		i++;
	}
	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}