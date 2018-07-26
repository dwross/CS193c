// math.js
// module doing math stuff.

// stuff defined here is private unless explicitly
// exported

var x = 12;
var y = 15;

export const pi = 12;
export const e = 2.71828;
export var value = 1;

function hello() {
    console.log("hello");
}

function example() {
    console.log("example");
}

export function power(base, exp) {
    var result = 1;
    for(let i=0; i<exp; i++) {
        result *= base;
    }
    return result;
}