"user strict"; // treat all JS code as newer version of JS.

// alert("Hello") // will throw an error as we are using node.js and not browser.

let name = "Shammi"
let age = 30
let isLoggedIn = false

/* Primitive Data Types */
// Number => Range is 2 to the power of 52.
// bigint => Used to store a large number.
// string => ""
// boolean => true/false
// null => Null meaning Nothing, not even 0. Null means empty. It's a standalone value. Null is an Object in Javascript.
// undefined => When a value is not defined/assigned. e.g: let contact;
// symbol => Unique
// object

console.log(typeof "Shammi")  // => string
console.log (typeof true)    // => boolean
console.log(typeof null)    // => object
console.log(typeof undefined) // => undefined