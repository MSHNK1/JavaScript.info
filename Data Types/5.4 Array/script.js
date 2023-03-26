//N1
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4 ["Apples", "Pear", "Orange", "Banana"]
alert( fruits ); // Apples, Pear, Orange, Banana


//N2
let styles = ["Jazz", "Blues"];
alert(styles);
styles.push("Rock-n-Roll");
alert(styles);
styles[(styles.length - 1) / 2] = "Classics";
alert(styles);
styles.shift();
alert(styles);
styles.unshift("Rap", "Reggae");
alert(styles);

//N3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // a, b, funcion() {alert(this)}


//N4
let promptArr =[];
let sumArr = 0;
(function sumInput() {
    let promptValue = prompt("A number please?", 0);
    
    if (promptValue === null || promptValue === "" || !isFinite(promptValue)) {
        return alert(sumArr)
    } else {
        promptArr.push(+promptValue);
        sumArr += +promptValue;
        sumInput();        
    }
})();


//N5
// I'l be back
// Hasta la vista, baby