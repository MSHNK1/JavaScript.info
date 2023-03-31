//N1 - Sum the properties with Object.values
function sumSalaries(obj) {
    let sum = 0;

    for (let salary of Object.values(obj)) {
        sum += salary;
    }

    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries)); // 650



//N2 - Count properties with
function count(obj) {
    return Object.entries(obj).length; //we could user Object.values or Object.values as well
}

let user = {
    name: 'John',
    age: 30
};

alert(count(user)); // 2