function changeColors() {
    document.body.style.color = 
            document.getElementById("main").foreground.value;
    document.body.style.backgroundColor =
            document.getElementById("main").background.value;
}

document.getElementById("changeColorButton").addEventListener("click",changeColors,false);