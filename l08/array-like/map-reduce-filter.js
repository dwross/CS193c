// MAP 
// calls a function on all items of an array and
// forms a new array from the results

var numbers = [1, 2, 3, 4, 5];

var squares = numbers.map((x) => x*x);
    // squares is [ 1, 4, 9, 16, 25 ]

// REDUCE
// calls a function on each element of the array
// Function should take two parameters, an accumulated value
// and the current item in the array.

var total = numbers.reduce((sum, item) => sum + item);
    // total will be 15
    // here sum is the accumulated value
    // the first time function is called sum = numbers[0]
    // and item = numbers[1]
    // the function is called length - 1 times because
    // it's not called on numbers[0]

// The initial accumulated value can be provided as a second
// parameter to the reduce call

var differentTotal = numbers.reduce(
                                (sum, item) => sum + item,
                                10);
    // total will be 25
    // I've explicitly provided 10 as an initial value for
    // the accumlated value sum
    // the first time the function is called sum = 10
    // and item = numbers[0]
    // with a provided initial value, the function will be called
    // length of array times

// FILTER
// filter calls a function which returns true or false for each
// element of the array.  It forms a new array of elements for which
// the function returned true

var mixedNumbers = [-5, 3, -12, 17, 25, -1];

var negativeNumbers = mixedNumbers.filter((item) => item < 0);
    // negativeNumbers => [ -5, -12, -1 ]

// ===> WARNING <===
// These only work on real arrays, not array-like objects