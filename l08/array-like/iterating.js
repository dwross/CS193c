var paragraphs = document.getElementsByTagName("p");
    // many methods return array-like objects
    // these allow us to do some array-like things, but not
    // everything available on a real array

var realArray = ["able", "baker", "charlie", "delta"];
    // this is a real array

var sampleString = "Stanford";
    // strings are iterable

/// use for of to iterate through any iteratable item,
//  including arrays and array-like objects

for(let item of realArray) {
    console.log(item);
}

for(let item of paragraphs) {
    console.log(item.innerText);
}

for(let ch of sampleString) {
    console.log(ch);
}

// you can also use a traditional for loop on an actual
// array or an array-like object

for(let i=0; i< realArray.length; i++) {
    console.log(realArray[i]);
}

for(let i=0; i<paragraphs.length; i++) {
    console.log(paragraphs[i].innerText);
}

for(let i=0; i<sampleString.length; i++) {
    console.log(sampleString.charAt(i));
    console.log(sampleString[i]);
        // accessing strings via [] only works as of ECMAScript 5
        // so you may want to use the traditional charAt
}

// forEach is a method on Arrays (but not Array-like objects)
// pass an array and call on each item

realArray.forEach((item) => console.log(item));

realArray.forEach((item,index) => console.log(`${index}: ${item}`));
    // can add a second parameter to get the index number

// paragraphs.forEach((item) => console.log(item));
    // This does NOT work, item returned by getElementsByTagName is
    // not a real array, even though it is "array-like"

// sampleString.forEach((item) => console.log(item));
    // This does NOT work, Strings are not real arrays
