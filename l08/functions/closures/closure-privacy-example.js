// closures can be used to create private variables
// or functions

function myStuff() {
    // everything inside here is private unless explicitly returned
    var x = 12;
    var y = 13;
    var z = 15;

    function foo() {  // private internal function
        // do private stuff here
        // can access and change variables in closure
    }

    function bar() {  // private internal function
        // do private stuff here
    }

    function baz() {
        console.log("baz");
    }

    // we explicitly return anything we want made public
    return {z: z, baz: baz}; 
}

var {z,baz} = myStuff();

console.log(z);
baz();

// we can do the same thing without bothering to name the outer function
// typically define and immediately execute function
// this technique is called IIFE Immediately Invoked Function Expression

var {z, baz} = (function () {
            // everything inside here is private unless explicitly returned
            var x = 12;
            var y = 13;
            var z = 15;

            function foo() {  // private internal function
                // do private stuff here
                // can access and change variables in closure
            }

            function bar() {  // private internal function
                // do private stuff here
            }

            function baz() {
                console.log("baz");
            }

            // we explicitly return anything we want made public
            return {z: z, baz: baz}; 
        })();

// and we can do the same thing with an arrow function

var {z, baz} = (() => {
            // everything inside here is private unless explicitly returned
            var x = 12;
            var y = 13;
            var z = 15;

            function foo() {  // private internal function
                // do private stuff here
                // can access and change variables in closure
            }

            function bar() {  // private internal function
                // do private stuff here
            }

            function baz() {
                console.log("baz");
            }

            // we explicitly return anything we want made public
            return {z: z, baz: baz}; 
        })();
