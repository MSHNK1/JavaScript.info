//N1 - Class extends Object?
class Rabbit extends Object {
    constructor(name) {
        super(name);
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

// hasOwnProperty method is from Object.prototype
alert(rabbit.hasOwnProperty('name')); // true