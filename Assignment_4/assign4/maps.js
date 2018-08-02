"strict";

var mapNumber = 1;
var mapFiles = ["map-s.gif", "map-m.gif", "map-l.gif", "map-xl.gif"];
var mapWidths = [];
var mapHeights = [];
var mapImages = new Array();

function loadMaps() {
  for ( let i=0; i<mapFiles.length; i++) {
    mapImages[i] = new Image();
    mapImages[i].src = mapFiles[i];
    mapImages[i].onload = function () {
    }
  }
}

function handleResize() {
	document.getElementById("mapBorder").style.setProperty("width",(window.innerWidth- 280).toString()+"px");
	document.getElementById("mapBorder").style.setProperty("height",(window.innerHeight-80).toString()+"px");
}

loadMaps();

handleResize();

// function moveIt() {
//   document.getElementById("mapImage").style.setProperty("left","-100px");
//   var style = document.defaultView.getComputedStyle(
//     document.getElementById("mapImage"),"");
//   alert(parseInt(style.left));
// }



/// INFORMATION RETRIEVAL FUNCTIONS

function getBorderWidth() {
  let borderStyle = document.defaultView.getComputedStyle(
    document.getElementById("mapBorder"),"");
  return parseInt(borderStyle.width);  
}

function getBorderHeight() {
  let borderStyle = document.defaultView.getComputedStyle(
    document.getElementById("mapBorder"),"");
  return parseInt(borderStyle.height);    
}

function getMapHeight() {
  let style = document.defaultView.getComputedStyle(
    document.getElementById("mapImage"),"");
	return parseInt(style.height);
}

function getMapWidth() {
  let style = document.defaultView.getComputedStyle(
    document.getElementById("mapImage"),"");
	return parseInt(style.width);
}

function getMapTop() {
  let style = document.defaultView.getComputedStyle(
    document.getElementById("mapImage"),"");
	return parseInt(style.top);
}

function getMapLeft() {
  let style = document.defaultView.getComputedStyle(
    document.getElementById("mapImage"),"");
	return parseInt(style.left);
}

function onMap(x,y) {
	return (x >= getMapLeft() && x <= getMapLeft() + getMapWidth()
				&& y >= getMapTop() && y <= getMapTop() + getMapHeight());
}

function getWidthCenterOfVisable() {
  if (getMapLeft() < 0 && (getMapLeft() + getMapWidth()) > getBorderWidth()) {
    return parseInt(getBorderWidth() / 2);
  }
  if (getMapLeft() >= 0 && (getMapLeft() + getMapWidth()) <= getBorderWidth()) {
    return parseInt(getMapWidth() / 2);
  }
  if (getMapLeft() < 0 && (getMapLeft() + getMapWidth()) <= getBorderWidth()) {
    return parseInt((getMapWidth() + getMapLeft()) / 2);
  }
  if (getMapLeft() >= 0 && (getMapLeft() + getMapWidth()) > getBorderWidth()) {
    return parseInt((getBorderWidth() - getMapLeft()) / 2);
  }
  if (getMapLeft() > getBorderWidth()) {
    return;
  }
  if ((getMapLeft() + getMapWidth()) < 0) {
    return;
  }
}

function getHeightCenterOfVisable() {
  if (getMapTop() < 0 && (getMapTop() + getMapHeight()) > getBorderHeight()) {
    return parseInt(getBorderHeight() / 2);
  }
  if (getMapTop() >= 0 && (getMapTop() + getMapHeight()) <= getBorderHeight()) {
    return parseInt(getMapHeight() / 2);
  }
  if (getMapTop() < 0 && (getMapTop() + getMapHeight()) <= getBorderHeight()) {
    return parseInt((getMapHeight() + getMapTop()) / 2);
  }
  if (getMapTop() >= 0 && (getMapTop() + getMapHeight()) > getBorderHeight()) {
    return parseInt((getBorderHeight() - getMapTop()) / 2);
  }
  if (getMapTop() > getBorderHeight()) {
    return;
  }
  if ((getMapTop() + getMapHeight()) < 0) {
    return;
  }
}

/// DRAGGING FUNCTIONS

var isDragging = false;
var distanceToTop = 0;
var distanceToLeft = 0;

function handleMouseDown(evt) {
	if (onMap(evt.clientX-40,evt.clientY-40)) {
		isDragging = true;
    let mapStyle = document.defaultView.getComputedStyle(
      document.getElementById("mapImage"),"");
		distanceToLeft = parseInt(mapStyle.left) - evt.clientX;
    distanceToTop = parseInt(mapStyle.top) - evt.clientY;
    document.getElementById("mapImage").style.setProperty("cursor","move");
		evt.preventDefault();
	}
}

function handleMouseUp(evt) {
	if (isDragging) {
    let mapStyle = document.getElementById("mapImage");
    mapStyle.style.setProperty("left",(distanceToLeft + evt.clientX) + "px");
    mapStyle.style.setProperty("top",(distanceToTop + evt.clientY) + "px");
    mapStyle.style.setProperty("cursor","default");
		isDragging = false;		
	}
}

function handleMouseMove(evt) {
	if (isDragging) {
    let mapStyle = document.getElementById("mapImage");
    mapStyle.style.setProperty("left",(distanceToLeft + evt.clientX) + "px");
    mapStyle.style.setProperty("top",(distanceToTop + evt.clientY) + "px");
		evt.preventDefault();
	}
}

/// ZOOMING FUNCTIONS

function zoomMapIn() {
  if (mapNumber === mapImages.length-1) {
    return;
  }
  if (mapNumber === mapImages.length-2){
    document.getElementById("plus").innerHTML="";
  }
  if (mapNumber === 0) {
    document.getElementById("minus").innerHTML="-";    
  }
  mapNumber++;
  document.getElementById("mapImage").setAttribute("src",mapImages[mapNumber].src);
}

function zoomMapOut() {
  if (mapNumber === 0) {
    return;
  }
  if (mapNumber === 1){
    document.getElementById("minus").innerHTML="";
  }
  if (mapNumber === mapImages.length-1) {
    document.getElementById("plus").innerHTML="+";
  }
  mapNumber--;
  document.getElementById("mapImage").setAttribute("src",mapImages[mapNumber].src);
}

/// NAVIGATION FUNCTIONS

function moveMapLeft() {
  document.getElementById("mapImage").style.setProperty("left",(getMapLeft() - getWidthCenterOfVisable()) + "px");
}

function moveMapRight() {
  document.getElementById("mapImage").style.setProperty("left",(getMapLeft() + getWidthCenterOfVisable()) + "px");
}

function moveMapUp() {
  document.getElementById("mapImage").style.setProperty("top",(getMapTop() - getHeightCenterOfVisable()) + "px");
}

function moveMapDown() {
  document.getElementById("mapImage").style.setProperty("top",(getMapTop() + getHeightCenterOfVisable()) + "px");
}

/// CENTERING FUNCTION

function centerMap() {
  let newLeft = (getBorderWidth() / 2) - (getMapWidth() / 2);
  let newTop = (getBorderHeight() / 2) - (getMapHeight() / 2);
  document.getElementById("mapImage").style.setProperty("left",newLeft + "px");
  document.getElementById("mapImage").style.setProperty("top",newTop + "px");
}

// function getMapInfo() {
//   console.log(getWidthCenterOfVisable());
//   console.log(getHeightCenterOfVisable());
//   console.log(getMapLeft());
//   console.log(getMapTop());
//   console.log(getMapWidth());
//   console.log(getMapHeight());
//   console.log(getBorderWidth());
//   console.log(getBorderHeight());
// }


/// SETUP FUNCTIONS

window.addEventListener("resize", handleResize, false);

document.addEventListener("mousedown",handleMouseDown,false);
document.addEventListener("mouseup",handleMouseUp,false);
document.addEventListener("mousemove",handleMouseMove,false);

document.getElementById("zoomIn").addEventListener("click",zoomMapIn,false);
document.getElementById("zoomOut").addEventListener("click",zoomMapOut,false);

document.getElementById("moveUp").addEventListener("click",moveMapUp,false);
document.getElementById("moveRight").addEventListener("click",moveMapRight,false);
document.getElementById("moveDown").addEventListener("click",moveMapDown,false);
document.getElementById("moveLeft").addEventListener("click",moveMapLeft,false);

document.getElementById("centerMap").addEventListener("click",centerMap,false);