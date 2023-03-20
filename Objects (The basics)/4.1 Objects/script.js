// N1 
let user = {};
user.name = "Nika";
user.surname = "Kochkiani";
user.name = "MSHNK1";
delete user.name;

alert(user.name);


// N2
let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true
}

alert("object is empty = " + isEmpty(schedule) );


// N3
let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130,
}

function sum(obj) {
    let sum = 0;

    if ( isEmpty(obj) ) {
        return "Sum of salaries is " + sum
    }

    for (let key in obj) {
        sum += obj[key]
    }

    return "Sum of salaries is " + sum
}

alert( sum(salaries) );


// N4
function multiplyNumeric(obj) {
    for (let key in obj) {
        typeof obj[key] == "number" ? obj[key] *= 2 : obj[key]
    }

    return obj.width
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

alert( multiplyNumeric(menu) );