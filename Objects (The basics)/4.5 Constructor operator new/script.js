//N1
let object = {};

function A() {
    return object;
}

function B() {
    return object;
}

let a = new A();
let b = new B();

alert(a == b); // true


//N2
function Calculator() {
    this.read = function() {
        this.a = +prompt("a");
        this.b = +prompt("b")
    },
    this.sum = function() {
        return this.a + this.b
    },
    this.mul = function() {
        return this.a * this.b
    }
}

let calculator = new Calculator();
calculator.read();

console.log(calculator)
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


//N3
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.operand = +prompt("How much to add?", 0);
        this.value += this.operand;
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
