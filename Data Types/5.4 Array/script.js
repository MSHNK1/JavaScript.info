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
