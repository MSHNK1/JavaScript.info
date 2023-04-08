// let worker = {
//     someMethod() {
//         return 1;
//     },

//     slow(x) {
//         // scary CPU-heavy task here
//         alert("Called with " + x);
//         return x * this.someMethod(); // (*)
//     }
// };

// // same code as before
// function cachingDecorator(func) {
//     let cache = new Map();
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x); // (**)
//         cache.set(x, result);
//         return result;
//     };
// }

// alert(worker.slow(1)); // the original method works

// worker.slow = cachingDecorator(worker.slow); // now make it caching

// alert(worker.slow(2)); // Whoops! Error: Cannot read property 'someMethod' of undefined



//N1 - Spy decorator
function work(a, b) {
    alert(a + b); // work is an arbitrary function or method
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
        // return func.apply(null, args);
    };
    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert('call:' + args.join()); // "call:1,2", "call:4,5"
}



//N2 - Delaying decorator
function f(x) {
    alert(x);
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms



// N3 - Debounce decorator
function debounce(f, ms) {
    let timeOut;

    return function () {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => f.apply(this, arguments), ms);
    }
}



//N4 - Throttle decorator
function ff(a) {
    console.log(a);
}

function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;

        func.apply(this, arguments); // (1)

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

// ff1000 passes calls to f at maximum once per 1000 ms
let ff1000 = throttle(ff, 1000);

ff1000(1); // shows 1
ff1000(2); // (throttling, 1000ms not out yet)
ff1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored








// function foo() {
//     console.log("foo", this);
// }

// let personA = {
//     name: "Jim",
//     age: 31,
//     height: 185,
//     fooFunction: foo,
//     logInfo: function (height, job) {
//         console.group(this);
//         console.log(`name: ${this.name}`);
//         console.log(`age: ${this.age}`);
//         console.log(`height: ${height}`)
//         console.log(`job: ${job}`)
//         console.groupEnd();
//     }
// }

// let personB = {
//     name: "Saul",
//     age: 42
// }

// personA.fooFunction(); // regular function call
// personA.logInfo(); // regular function call
// // personB.fooFunction(); // TypeError: personB.fooFunction is not a function
// // personB.logInfo(); // TypeError: personB.logInfo is not a function

// /* binds 'this' of personB to personA.loginfo function */
// /* 'bind' returns new function object so we call immediately */
// personA.logInfo.bind(personB, 176, "Janitor")();

// /* as 'bind' but calls implicitly */
// personA.logInfo.call(personB, 1768, "Janitor");

// /* as 'call' but arguments must be in array */
// personA.logInfo.apply(personB, [1767, "Janitor"]);