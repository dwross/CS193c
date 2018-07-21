// closures

// functions defined inside of other functions retain access
// to local variables of functions they were defined within

function outer(x) {
    var outerX = x;

    function inner() {
        console.log(outerX);
    }

    return inner;
}



var ex1 = outer(12);

ex1(); // => 12

// console.log(outerX);
    // illegal access to non-existant outerX
    // outerX is not a global variable

// each function returned has its own closure

var ex2 = outer(15);

ex2(); // => 15

ex1(); // still => 12

// variables in the closure can have their values changed

function setupIncrement(init) {
    var counter = init;

    return function () {
        return ++counter;
    }
}

var increment = setupIncrement(5);

increment(); // => 6
increment(); // => 7
increment(); // => 8

// if we're just using the outer function to create a closure,
// and we're only using it once, we don't even have to give it 
// a name

var increment = (function (init) {
        var counter = init;

        return function () {
            return ++counter;
        }
    })(5);

// or

var increment = ((init) => {
    var counter = init;

    return function () {
        return ++counter;
    }
})(5);