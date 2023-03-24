//N1 
let a = +prompt("The first number?", 0);
let b = +prompt("The second number?", 0);

alert(a + b);

//N2
let x = 6.35;

alert(Math.round((x * 10)) / 10);

//N3
function readNumber() {
    let y = prompt("Enter a number please?", 0);
    let y1 = "Read: ";

    if (isNaN(y)) {
        readNumber();
    } else if (y === "" || y === null) {
        return alert(y1 += null);
    } else {
        return alert(y1 += +y)
    }

}

readNumber();


//N4
function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525


//N5
function randomInteger(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5