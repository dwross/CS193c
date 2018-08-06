"strict";

var mapNumber = 1;
var mapFiles = ["map-s.gif", "map-m.gif", "map-l.gif", "map-xl.gif"];
var mapImages = new Array();

/// STARTUP FUNCTIONS

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

function centerOverMap() {
  let widthCenter = getBorderWidth() / 2;
  let heightCenter = getBorderHeight() / 2;
  return onMap(widthCenter, heightCenter);
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
  if (centerOverMap()) {
    if (mapNumber === mapImages.length-1) {
      return;
    }
    if (mapNumber === mapImages.length-2){
      document.getElementById("plus").innerHTML="";
    }
    if (mapNumber === 0) {
      document.getElementById("minus").innerHTML="-";    
    }
    let widthCenter = getBorderWidth() / 2;
    let heightCenter = getBorderHeight() / 2;
    let nextMapWidth = mapImages[mapNumber+1].width;
    let nextMapHeight = mapImages[mapNumber+1].height;
    let newLeft = (nextMapWidth*((getMapLeft() - widthCenter)/getMapWidth())) + widthCenter;
    let newTop = (nextMapHeight*((getMapTop() - heightCenter)/getMapHeight())) + heightCenter;
    mapNumber++;
    document.getElementById("mapImage").setAttribute("src",mapImages[mapNumber].src);
    document.getElementById("mapImage").style.setProperty("left",newLeft + "px");
    document.getElementById("mapImage").style.setProperty("top",newTop + "px");
  }
}

function zoomMapOut() {
  if (centerOverMap()) {
    if (mapNumber === 0) {
      return;
    }
    if (mapNumber === 1){
      document.getElementById("minus").innerHTML="";
    }
    if (mapNumber === mapImages.length-1) {
      document.getElementById("plus").innerHTML="+";
    }
    let widthCenter = getBorderWidth() / 2;
    let heightCenter = getBorderHeight() / 2;
    let nextMapWidth = mapImages[mapNumber-1].width;
    let nextMapHeight = mapImages[mapNumber-1].height;
    let newLeft = (nextMapWidth*((getMapLeft() - widthCenter)/getMapWidth())) + widthCenter;
    let newTop = (nextMapHeight*((getMapTop() - heightCenter)/getMapHeight())) + heightCenter;
    mapNumber--;
    document.getElementById("mapImage").setAttribute("src",mapImages[mapNumber].src);
    document.getElementById("mapImage").style.setProperty("left",newLeft + "px");
    document.getElementById("mapImage").style.setProperty("top",newTop + "px");
  }
}

/// NAVIGATION FUNCTIONS

function moveMapLeft() {
  document.getElementById("mapImage").style.setProperty("left",(getMapLeft() - (getBorderWidth() / 2)) + "px");
}

function moveMapRight() {
  document.getElementById("mapImage").style.setProperty("left",(getMapLeft() + (getBorderWidth() / 2)) + "px");
}

function moveMapUp() {
  document.getElementById("mapImage").style.setProperty("top",(getMapTop() - (getBorderHeight() / 2)) + "px");
}

function moveMapDown() {
  document.getElementById("mapImage").style.setProperty("top",(getMapTop() + (getBorderHeight() / 2)) + "px");
}

function centerMap() {
  let newLeft = (getBorderWidth() / 2) - (getMapWidth() / 2);
  let newTop = (getBorderHeight() / 2) - (getMapHeight() / 2);
  document.getElementById("mapImage").style.setProperty("left",newLeft + "px");
  document.getElementById("mapImage").style.setProperty("top",newTop + "px");
}

function moveMapToPoint(evt) {
  if (onMap(evt.clientX,evt.clientY)) {
    let evtX = evt.clientX - 40;
    let evtY = evt.clientY - 40;
    let newLeft = 0;
    if (evtX < (getBorderWidth() / 2)) {
      newLeft = getMapLeft() + ((getBorderWidth() / 2) - evtX);
    } else {
      newLeft = getMapLeft() - (evtX - (getBorderWidth() / 2));
    }
    document.getElementById("mapImage").style.setProperty("left",newLeft + "px");
    let newTop = 0;
    if (evtY < (getBorderHeight() / 2)) {
      newTop = getMapTop() + ((getBorderHeight() / 2) - evtY);
    } else {
      newTop = getMapTop() - (evtY - (getBorderHeight() / 2));
    }
    document.getElementById("mapImage").style.setProperty("top",newTop + "px");
    evt.preventDefault();
  }
}

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

document.addEventListener("dblclick",moveMapToPoint,false);