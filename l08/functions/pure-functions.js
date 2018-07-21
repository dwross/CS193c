// multiply is a pure function
// it has no side effects, it will always return the same results for
// the same inputs

function multiply(a, b) {
    return a * b;
}


// increment is not a pure function
// its results depends on something other than its input parameters
var current = 0;

function increment() {
    current = current + 1;
    return current;
}

// setName is not a pure function
// It changes the state of the world via side effect
var name;

function setName(newName) {
    name = newName;
}

// outputInfo is not a pure function
// Printing something is a side effect

function outputInfo(info) {
    console.log(info);
}