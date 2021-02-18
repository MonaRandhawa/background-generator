var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

css.textContent = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColour () {
	var num = "#";
	var hex = "0123456789abcdef";

	while (num.length < 7) { 
	 num += hex[Math.floor(Math.random()*hex.length)];
	}
	return num;
}

function generateRandom() {
	color1.value = randomColour();
	color2.value = randomColour();
	setGradient();
}

generateRandom();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", generateRandom);