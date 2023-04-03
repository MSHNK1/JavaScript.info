//N1 - Sum all numbers till the given one with recursion
function sumTo(n) {
    let sum = 0;

    // // N1 approach
    // for (let i = 0; i <= n; i++) {
    //     sum += i;
    // }


    // //N2 approach
    // if (n == 1) {
    //     sum += n;
    // } else {
    //     sum = n + sumTo(n - 1);
    // }

    //N3 approach
    return n * (1 + n) / 2 

    return sum;
}

alert( sumTo(100) ); // 5050



//N2 - Calculate factorial
function factorial(n) {
    if (n == 0 ) {
        return 1;
    } else if (n < 0) {
        return Infinity;
    } else {
        return n ? n * factorial(n - 1) : 1;
    }
}

alert( factorial(-1) ); // 120



//N3 - Fibonacci numbers
function fib(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }

    return b;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757



//N4 - Output a single-linked list
function printList(list) {
    
    // Loop Approach
    // while (list) {
    //   alert(list.value);
    //   list = list.next;
    // }


    //Recursion Approach
    alert(list.value);
    
    if (list.next) {
        printList(list.next);
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list);
