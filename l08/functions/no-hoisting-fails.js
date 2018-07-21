// without traditional function declaration, there is no hoisting
// we can't use "example" before we've declared it.

example();

var example = function() {
    console.log("example");
}

