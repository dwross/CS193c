var photoArray = [
	"memchu.jpg","quad.jpg", "hoop.jpg", "memorial-court.jpg"
];

"use strict";

var picsArray = new Array();

var picsGallery = "";

loadPics();

function loadPics() {
	for ( let i=0; i<photoArray.length; i++) {
		picsArray[i] = new Image();
		picsArray[i].src = photoArray[i];
	}
}

drawPics();

function drawPics() {
	for (let i=0; i<picsArray.length; i++) {
		picsGallery = picsGallery + "<img class=picture id=pix" + i + " src=" + picsArray[i].src + " />";
	}
	document.getElementById("picContainer").innerHTML = picsGallery;
}

var isDragging = false;
var distanceToTop = 0;
var distanceToLeft = 0;
var origTop = 0;
var origLeft = 0;
var currPicID = "";

function handleMouseDown(evt) {
	if (evt.target.id.substring(0,3) === "pix") {
		isDragging = true;
		currPicID = evt.target.id;
		let picElem = document.getElementById(evt.target.id);
		let picStyle = document.defaultView.getComputedStyle(picElem,"");
		origLeft = parseInt(picStyle.left);
		origTop = parseInt(picStyle.top);
		distanceToLeft = parseInt(picStyle.left) - evt.clientX;
    distanceToTop = parseInt(picStyle.top) - evt.clientY;
		document.getElementById(evt.target.id).style.setProperty("cursor","move");
		evt.preventDefault();
	}
}

function handleMouseUp(evt) {
	if (isDragging  && (evt.target.id === currPicID)) {
		let picStyle = document.getElementById(evt.target.id);
		if ((evt.clientX >= 10) && 
			(evt.clientX <= ((240 * photoArray.length) + 10)) &&
			(evt.clientY >= 10) && (evt.clientY <= 200)) {
				let swapPicNum = Math.floor((evt.clientX - 10) / 240);
				let tempPicSrc = evt.target.src;
				let targetPic = document.getElementById("pix" + swapPicNum);
				picStyle.setAttribute("src", targetPic.src);
				targetPic.setAttribute("src", tempPicSrc);
		}
		picStyle.style.setProperty("left",(origLeft) + "px");
		picStyle.style.setProperty("top",(origTop) + "px");
		picStyle.style.setProperty("cursor","default");
		distanceToTop = 0;
		distanceToLeft = 0;
		origTop = 0;
		origLeft = 0;
		currPicID = "";
		isDragging = false;		
	}
}

function handleMouseMove(evt) {
	if (isDragging  && (evt.target.id === currPicID)) {
    let picStyle = document.getElementById(evt.target.id);
    picStyle.style.setProperty("left",(distanceToLeft + evt.clientX) + "px");
    picStyle.style.setProperty("top",(distanceToTop + evt.clientY) + "px");
		evt.preventDefault();
	}
}

document.addEventListener("mousedown",handleMouseDown,false);
document.addEventListener("mouseup",handleMouseUp,false);
document.addEventListener("mousemove",handleMouseMove,false);