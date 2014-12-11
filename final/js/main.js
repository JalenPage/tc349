function OnPressImage1()
{
	var imageElement = document.getElementById("bigPicture");
	
	imageElement.src = "img/image01.jpg";
}

function OnPressImage2()
{
	var imageElement = document.getElementById("bigPicture");
	
	imageElement.src = "img/image02.jpg";
}

function OnPressImage3()
{
	var imageElement = document.getElementById("bigPicture");
	
	imageElement.src = "img/image03.jpg";
}

function OnPressImage4()
{
	var imageElement = document.getElementById("bigPicture");
	
	imageElement.src = "img/image04.jpg";
}

function formatNames() 
{
	'use strict';
	var allNames;
	var formattedName;
    
	var firstName = document.getElementById('firstName').value;
	var secondName = document.getElementById('secondName').value;
	var thirdName = document.getElementById('thirdName').value;
	
	allNames = [firstName,secondName,thirdName];
	//allNames = Math.random()*2
	formattedName = allNames[(Math.floor((Math.random()*3)))];

	document.getElementById('result').value = formattedName;
	
	return false;
    
} 

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = formatNames;
}
window.onload = init;
