let a = 1, b = 1;

let c = ++a; // 2
console.log(c + " should be 2");

let d = b++; // 1
console.log(d + " should be 1");


let e = 2;
let x = 1 + (e *= 2); // 5
console.log(x + " should be 5");


let aa = prompt("First number?", "1");
let bb = prompt("Second number?", "2");

alert(aa + bb); // 12