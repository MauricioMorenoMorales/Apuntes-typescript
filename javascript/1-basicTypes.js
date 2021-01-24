"use strict";
//Tuplas, las tuplas son arrays con tipos ya definidos y no pueden cambiar
let x;
x = ['Hola', 10];
//x = [10, 'Hola'] //Type 'number is not assignable to type 'string
console.log(x[0].substring(1));
//console.log(x[1].substring(1)) //Property 'substring' does not exist on type 'number'.
//*Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
//* Unknown
let notSure = 4;
notSure = 'maybe a string instead';
// OK, definitely a boolean
notSure = false;
// 'maybe' could be a string, object, boolean, undefined, or other types
//const aNumber: number = maybe // Type 'unknown' is not assignable to type 'number'.
if (maybe === true) {
    // TypeScript knows that maybe is a boolean now
    const aBoolean = maybe;
    //const aString: string = maybe /* Type 'boolean' is not assignable to type 'string'. */
}
// OK, return value of 'getValue' is not checked
const str = getValue('myString');
let looselyTyped = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
let strictlyTyped = 4;
//strictlyTyped.toFixed() /*Object is of type unknown*/
//* Void
function warnUser() {
    console.log('This is my warning message');
}
let unusable = undefined;
// OK if `--strictNullChecks` is not given
//unusable = null /*Type null is not assignable to type void */
//* Never
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error('Something failed');
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
// OK
create({ prop: 0 });
create(null);
//create(undefined) // Remember, undefined is a subtype of null /* Argument of type 'undefined' is not assignable to parameter of type 'object | null'.*/
//*Type assertions
let someValue = 'this is a string';
let strLength = someValue.length;
let someValue2 = 'this is a string';
let strLength2 = someValue2.length;
//! Types are always in lowercase
function reverse(s) {
    return s.split('').reverse().join('');
}
reverse('hello world');
