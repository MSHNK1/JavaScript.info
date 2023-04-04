//N1 - Does a function pickup latest changes?
let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? - Pete



//N2 - Which variables are available?
function makeWorker() {
    let name2 = "Pete";

    return function () {
        alert(name2);
    };
}

let name2 = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show? - Pete



// N3 - Are counters independent?
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1



//N4 - Counter object
function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter3 = new Counter();

alert(counter3.up()); // 1
alert(counter3.up()); // 2
alert(counter3.down()); // 1



//N5 - Function in if
let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi2() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi2(); // Hello John



//N6 - Sum with closures
function sum(a) {
    return function (b) {
        return alert(a + b);
    }
}
//alternative approach with arrow functions
// let sum = a => b => alert(a + b);

sum(1)(2);
sum(5)(-1);



//N7 - Is variable visible?
let x = 1;

function func() {
    console.log(x); // un-initialised x

    let x = 2;
}

func();



//N8 - Filter through function
function inBetween(number1, number2) {
    return function(variable) {
        return (number1 <= variable && variable <= number2) ? variable : null;
    }
}
function inArray(array) {
    return function(variable) {
        return array.includes(variable);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2



//N9 - Sort by field
function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));



//N10 - Army of functions
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () { // create a shooter function,
            console.log(j); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[8](); // 10 ...and so on.