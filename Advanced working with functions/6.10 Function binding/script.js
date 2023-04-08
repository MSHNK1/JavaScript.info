//N1 - Bound function as a method
function ff() {
    alert(this); // null or window
}

let user = {
    g: ff.bind(null)
};

user.g();



//N2 - Second bind
function f() {
    alert(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); // John



//N3 - Function property after bind
function sayHi() {
    alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "John"
});

console.log(bound.test); // undefined



//N4 - Fix a function that loses "this"
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user2 = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user2.loginOk.bind(user2), user2.loginFail.bind(user2));



//N5 - Partial application for login
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user3 = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(user3.login.bind(user3, true), user3.login.bind(user3, false)); // ?