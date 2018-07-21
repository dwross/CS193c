function example(a, b) {

}

// we can call a function with fewer parameters than expected
// these calls are legal

example(1);
example();

// we can call a function with more parameters than expected

example(1,2,3,4,5);

// it's up to function to handle this
// arguments variable gives access to array-like list of arguments
// arguments variable not available for arrow functions

function varParams(a, b) {
    if (a == undefined) {
        console.log("a is undefined");
    }
    if (b == undefined) {
        console.log("b is undefined");
    }
    if (arguments.length > 2) {
        console.log("got extra arguments");
    }
}

varParams();
varParams(15);
varParams(1,2,3,4,5,6,7);

// we can define default values for parameters that aren't
// provided

function exampleDef(a = 5, b = 10, c = 15) {
    console.log(`a=${a}, b=${b}, c=${c}`);
}

exampleDef(); // a=5, b=10, c=15
exampleDef(12,15); // a=12, b=15, c=15
exampleDef(undefined,100,200); // a=5, b=100, c=200

// the ... syntax can be used to get additional parameters
// these are sometimes referred to as "rest parameters", and
// by convention the parameter used to store them in is named
// rest
// rest has a real array with the additional values in it

function handleMany(a, b, ... rest) {
    console.log(`we have ${rest.length} additional parameters`);
    if (rest.length > 0) {
        console.log(`the third parameter is ${rest[0]}`);
    }
}

handleMany(1); // we have 0 additional parameters
handleMany(1,2,3,4,5);
    // we have 3 additional parameters
    // the third parameter is 3