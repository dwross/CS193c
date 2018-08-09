var fs = require("fs");

var stat = fs.statSync("example.js");

if(stat.isFile()) {
    console.log("example.js is a file");
} else {
    console.log("example.js is not a file");    
}

console.log("Okay, we've finished calling statSynch");
