//N1 - Destructuring assignment
let user = { name: "John", years: 30 };

// your code to the left side:
let { name: name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false



//N2 - The maximal salary
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// function topSalary(salaries) {
//     let topSalaryAmount = Math.max(Object.entries(salaries));
//     return alert(topSalaryAmount);
// }
