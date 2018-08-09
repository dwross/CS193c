var fs = require("fs");

if(fs.existsSync("example.js")) {
    console.log("example.js exists");
} else {
    console.log("example.js does not exist");    
}