//N2

let calculator = {
    read() {
        this.a = +prompt("a")
        this.b = +prompt("b")
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


//N3
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () { // shows the current step
        alert(this.step);
        return this
    }
};
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0