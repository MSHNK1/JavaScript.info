let dictionary = Object.create(null);

// your code to add dictionary.toString method

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
    alert(key); // "apple", then "__proto__"
}

Object.defineProperty(dictionary, "toString", {
    value() {
        return Object.keys(this).join();
    }
})

console.log(dictionary);
// your toString in action
alert(dictionary); // "apple,__proto__"



//N2 - The difference between calls
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined