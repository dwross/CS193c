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

var listitems = "";

document.getElementById("resultsTableElemnts").innerHTML = "<tr class='tableHeaderRow'><td>Name</td><td>SAT High</td><td>SAT Low</td><td>Tuition</td></tr>";

function addItem() {
	var elem = document.getElementById("resultsTableElemnts");

	if (typeof elem != 'undefined')
	{
		document.getElementById("resultsTableElemnts").innerHTML = "";
	}
	listitems = listitems + "<tr class='tableHeaderRow'><td>Name</td><td>SAT High</td><td>SAT Low</td><td>Tuition</td></tr>";
	listitems = listitems + "<tr><td>" + univArray[0].nickname + "</td><td>" + univArray[0].SATh + "</td><td>" + univArray[0].SATl + "</td><td>" + univArray[0].tuition + "</td></tr>";
	listitems = listitems + "<tr><td>" + univArray[1].nickname + "</td><td>" + univArray[1].SATh + "</td><td>" + univArray[1].SATl + "</td><td>" + univArray[1].tuition + "</td></tr>";
	listitems = listitems + "<tr><td>" + univArray[6].nickname + "</td><td>" + univArray[6].SATh + "</td><td>" + univArray[6].SATl + "</td><td>" + univArray[6].tuition + "</td></tr>";
	document.getElementById("resultsTableElemnts").innerHTML = listitems;
}

var button = document.getElementById("updateTableButton");
button.addEventListener("click",addItem,false);