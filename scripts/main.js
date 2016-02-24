//main.js

var myHeading = document.querySelector('h1');
myHeading.textContent = 'LiquidPixels';


var myBanner = document.querySelector('#banner');

myBanner.onclick = function() {
	var mySrc = myBanner.getAttribute('src');

	if (mySrc === 'images/banner1.png') {
		myBanner.setAttribute('src','images/banner2.png');
	} else if (mySrc === 'images/banner2.png') {
		myBanner.setAttribute('src','images/banner3.png');
	} else if (mySrc === 'images/banner3.png') {
		myBanner.setAttribute('src','images/banner1.png');
	}

}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function getUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
}

function setHeading(text){
	myHeading.textContent = "Hello, " + text + " welcome to LiquidPixels";
}


if (!localStorage.getItem('name')){
	getUserName();
}

myButton.onclick = function(){
	getUserName();
	setHeading(localStorage.getItem('name'));
}

setHeading(localStorage.getItem('name'));
