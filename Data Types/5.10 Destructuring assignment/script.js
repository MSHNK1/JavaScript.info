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

function topSalary(salaries) {
    let topSalaryAmount = 0;
    let topSalaryOwner = '';

    // Without destructuring
    // for (let salary of Object.entries(salaries)) {
    //     if (salary[1] > topSalaryAmount) {
    //         topSalaryAmount = salary[1];
    //         topSalaryOwner = salary[0];
    //     }
    // }
    
    // With destructuring
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topSalaryAmount) {
            topSalaryAmount = salary;
            topSalaryOwner = name;
        }
    }
    return alert("Top-paid person is " + topSalaryOwner + " with salary of " + topSalaryAmount);
}

topSalary(salaries);
