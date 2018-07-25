// I've included both the universities full names and their nicknames
// use the nicknames for this assignment.  I've included the full names
// so those who aren't familiar with Bay Area universities will know
// what the names of the universities actually are.

var univArray = new Array(
		{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
		{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
		{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
		{name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
		{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
		{name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
		{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
		{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
		{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
		{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
		);



document.getElementById("resultsTableContainer").innerHTML = "<col width='147'><col width='117'><col width='110'><col width='86'><tr class='tableHeaderRow'><td>Name</td><td>SAT High</td><td>SAT Low</td><td>Tuition</td></tr>";

function removePreviousRows() {
	let collTable = document.getElementById('resultsTableContainer');
	let tbdyDelete = collTable.getElementsByTagName('tbody')[0];
	let i = tbdyDelete.rows.length-1;
	for( i; i > -1; i--) {
		tbdyDelete.deleteRow(i);
	}
}

function buildTable() {

	removePreviousRows();

	let radioChoices = document.querySelectorAll(".pubPrivRadio");
	let choice;
  for (item of radioChoices) {
    if (item.checked) {
			choice = item.value;		
    }
	}
	
	let criteriaArray = [0, 0, 0];
	let criteriaText = document.querySelectorAll(".maxMinInput");
	for (let i=0; i<criteriaText.length; i++){
		if (criteriaText[i].value !== "") {
			criteriaArray[i] = criteriaArray[i] + criteriaText[i].value;
		}
	}

	let listitems = "";
	listitems = listitems + "<tr class='tableHeaderRow'><td>Name</td><td>SAT High</td><td>SAT Low</td><td>Tuition</td></tr>";
	let collArraySize = univArray.length;
	for(let i = 0; i<collArraySize; i++){
		if (((choice === univArray[i].ownership) || (choice === "dontcare")) && 
			((criteriaArray[0] >= univArray[i].tuition) || (criteriaArray[0] === 0))&&
			((criteriaArray[1] >= univArray[i].SATh) || (criteriaArray[1] === 0)) &&
			(criteriaArray[2] <= univArray[i].SATl)) {
				listitems = listitems + "<tr><td>" + univArray[i].nickname + "</td><td>" + univArray[i].SATh + "</td><td>" + univArray[i].SATl + "</td><td>" + univArray[i].tuition + "</td></tr>";
		}
	}
	let tbdy = document.getElementById('resultsTableContainer').getElementsByTagName('tbody')[0];
	tbdy.innerHTML = listitems;
}

var button = document.getElementById("updateTableButton");
button.addEventListener("click",buildTable,false);

