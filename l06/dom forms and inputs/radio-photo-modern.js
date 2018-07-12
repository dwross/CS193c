
function changePhoto() {
    document.getElementById("photo").src = 
            "images/" + document.getElementById("main").photoSelect.value;
}

document.getElementById("changePhotoButton").addEventListener("click",changePhoto,false);