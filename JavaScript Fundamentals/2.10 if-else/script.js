if ("0") {
    alert("Hello"); // will do as "0" is true
}


let askName = prompt("What's the 'official' name of JavaScript?");

if (askName == "ECMAScript") {
    alert("Right!")
} else {
    alert("You don't know? 'ECMAScript'!")
}


let askValue = prompt("Input number");

if (askValue > 0) {
    alert(1);
} else if (askValue === 0) {
    alert(0);
} else if (askValue < 0) {
    alert(-1);
} else {
    alert("NaN")
}


let a = prompt("Input the first number");
let b = prompt("Input the second number")
let result = (a + b < 4) ? 'Below' : "Over";
alert(result);


let login = prompt();
let message = (login == 'Employee') ? "Hello" : 
    (login == "Director") ? "Greetings" : 
    (login == "") ? "No login" : 
    ""

alert(message);