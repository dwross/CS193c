var fs = require("fs");

function handleStat(err,stat) {
	if(err) {
		console.log("handleStat returned error");
		return;
	}
	if(stat.isFile()) {
		console.log("example.js is a file");
	} else {
		console.log("example.js is not a file");    
	}
}

var stat = fs.stat("example.js",handleStat);


console.log("Okay, we've finished calling stat");
