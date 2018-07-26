// all JavaScript elements go into a global context
// unless you're using some type of module system

// in browser based JavaScript that global context is
// the window object
// in Node.js the global context is the "global" variable

var x = 12;

console.log(window.x);
    // this accesses the var x

window.y = 15;

console.log(y);
    // this prints 15
