function changeCarColor() {
  document.getElementById("photo").src = document.getElementById("chooseColor").carColor.value;
}

for(select of document.getElementsByTagName("select")) {
	select.addEventListener("change",changeCarColor,false);
}

function calculateTotal() {
  var costs = document.querySelectorAll(".cost");
  var total = new Number('0');
  for (item of costs) {
    if (item.checked) {
        var num = new Number(item.value);
        total = total + num;  
    }
  }
  document.getElementById("calcOutput").value = '$'+Number(total.toFixed(2)).toLocaleString();
}

document.getElementById("calculateTotal").addEventListener("click",calculateTotal,false);