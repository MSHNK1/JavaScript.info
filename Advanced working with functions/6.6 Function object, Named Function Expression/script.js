//N1 - Set and decrease for counter with named function expression
function makeCounter() {
    let count = 10;

    function counter() {
        return count++;
    };

    counter.set = value => count = value;
    counter.decrease = () => --count

    return counter;
}

let counter = makeCounter();

counter.count = 10;

alert(counter()); // 10
alert(counter()); // 11
alert(counter.set(2)); // 2
alert(counter.decrease()); // 1



//N2 - Sum with an arbitrary amount of brackets
function sum(param1) {
    let currentSum = param1;
  
    function innerSum(param2) {
      currentSum += param2;
      return alert(innerSum);
    }
  
    innerSum.toString = function() {
      return currentSum;
    };
  
    return innerSum;
  }
  

sum(1)(2); // 1 + 2
sum(1)(2)(3); // 1 + 2 + 3
sum(5)(-1)(2);
sum(6)(-1)(-2)(-3);
sum(0)(1)(2)(3)(4)(5);