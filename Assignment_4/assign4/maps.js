"strict";

handleResize();

function handleResize() {
	document.getElementById("mapBorder").style.setProperty("width",(window.innerWidth- 280).toString()+"px");
	document.getElementById("mapBorder").style.setProperty("height",(window.innerHeight-80).toString()+"px");
}

window.addEventListener("resize", handleResize, false);