// regardless of how defined, functions are objects

function example() {
    console.log("example");
}

var example2 = function () {
    console.log("second example");
}

console.log(example);
console.log(example2);

// passing function in as a parameter

function execute(fn,a,b) {
    var result = fn(a,b);
    console.log(result);
}

function add(x,y) {
    return x + y;
}

execute(add,2,3);
execute(function(x,y) {return x - y},2,3);
execute((x,y)=> x * y,2,3);

// assigning to a variable

function multiply(a,b) {
    return a * b;
}

var product = multiply;

product(2,3);

// assigning as a property of an object
// (more implications on this next lecture)

function square(x) {
    return x * x;
}

var obj = {
    sq: square,
    cb: (x) => x * x * x
}

obj.sq(3);
obj.cb(3);

// can even return functions as values from other functions

function sign(x) {
    if (x >= 0) {
        return () => {console.log("positive")};
    } else {
        return () => {console.log("negative")};
    }
}

var resultFn = sign(2);
resultFn();
