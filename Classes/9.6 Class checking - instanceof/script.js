//N1 - Strange instanceof
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true - because both of them have same prototype