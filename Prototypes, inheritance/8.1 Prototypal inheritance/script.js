//N1 - Working with prototype
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // true (1)

delete rabbit.jumps;

alert(rabbit.jumps); // null (2)

delete animal.jumps;

alert(rabbit.jumps); // undefined (3)



//N2 - Searching algorithm
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pen); // 3
alert(bed.glasses); // 1
alert(table.money); // undefined



//N3 - Where does it write?
let animal2 = {
    eat() {
        this.full = true;
    }
};

let rabbit2 = {
    __proto__: animal2
};

rabbit2.eat(); //rabbit.full



//N4 - Why are both hamsters full?
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple