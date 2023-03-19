function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?')
}

function checkAge2(age) {
    return (age > 18) || confirm('Did parents allow you?')
}


let age = +prompt();
checkAge(age);
checkAge2(age);


function min(a, b) {
    if (a > b) {
        alert("min was " + b);
    } else {
        alert("min was " + a);
    }
}

let firstNumber = +prompt("Enter first number: ", "");
let secondNumber = +prompt("Enter second number: ", "");
min(firstNumber, secondNumber);


function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    alert("x in power n = " + result);
}

let x = +prompt("Enter number (x): ", "");
let n = +prompt("Enter power (n): ", "");

if (n > 1) {
    pow(x, n);
} else if (n == 0) {
    alert("x in power n = " + 1);
} else {
    alert("This is advanced and some code are needed to added!")
}