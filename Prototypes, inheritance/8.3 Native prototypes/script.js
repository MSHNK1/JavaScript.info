//N1 - Add method "f.defer(ms) to functions" - add a function in built-in prototype 
function f() {
    alert("Hello!");
}

if (!Function.prototype.defer) {
    Function.prototype.defer = function (ms) {
        setTimeout(this, ms);
    }
}

f.defer(1000); // shows "Hello!" after 1 second



//N2 - add the decorating "defer()" to functions
function f2(a, b) {
    alert(a + b);
}

if (!Function.prototype.defer2) {
    Function.prototype.defer2 = function(ms) {
        let f2 = this;
        return function(...args) {
            setTimeout(() => f2.apply(this, args), ms);
        } 
    }
}

f2.defer2(1000)(1, 2); // shows 3 after 1 second