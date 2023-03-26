//N1
function camelize(str) {
    let spltStr = str.split('-');

    for (let index = 1; index < spltStr.length; index++) {
        spltStr[index] = spltStr[index][0].toUpperCase() + spltStr[index].slice(1);
    }

    return spltStr.join("")

    // Alternative approach
    // return str.split("-").map((word, index) => (index === 0) ? word : word[0].toUpperCase() + word.slice(1)).join("");

}

alert(camelize("background-color") == 'backgroundColor');
alert(camelize("list-style-image") == 'listStyleImage');
alert(camelize("-webkit-transition") == 'WebkitTransition');



//N2
function filterRange(arr, a, b) {
    return arr.filter(number => (number >= a && number <= b))
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)



//N3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--
        }
    }

    console.log(arr);
}

let arr1 = [6, 5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]



//N4
let arr2 = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10



//N5
function copySorted(arr) {
    return arr.map(item => item).sort();

    //alternative approach
    return arr.slice().sort();
}

let arr3 = ["HTML", "JavaScript", "CSS", "css"];
let sorted = copySorted(arr3);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr3 ); // HTML, JavaScript, CSS (no changes)



// //N6
// function Calculator() {
//     this.calculate = function(str) {
//         let strr = str.split(" ");

//         // strr = strr.forEach(element => {
//         //     +element
//         // });
//         // strr = strr.join(" + ");
//         console.log(strr)
        
//         return alert(strr);
//     }
// }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7 + 2 + 4") ); // 10



//N7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users1 = [ john, pete, mary ];

let names = users1.map(user => user.name);

alert( names ); // John, Pete, Mary



//N8
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john1, pete1, mary1 ];

let usersMapped = users2.map((user) => ({ fullname: user.name + " " + user.surname, id: user.id }))

/*usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullname ) // John Smith



//N9
function sortByAge(users) {
    users.sort((a, b) => (a.age - b.age))
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr4 = [ pete2, john2, mary2 ];

sortByAge(arr4);

// now: [john, mary, pete]
alert(arr4[0].name); // John
alert(arr4[1].name); // Mary
alert(arr4[2].name); // Pete



//N11
function getAverageAge(users) {
    return users.reduce((sum, current) => (sum + current.age), 0) / users.length
}

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr5 = [ john3, pete3, mary3 ];

alert( getAverageAge(arr5) ); // (25 + 30 + 29) / 3 = 28



//N12
function unique(arr) {
    const newArr = [];

    arr.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    })

    return newArr;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O



//N13
function groupById(arr) {
    return arr.reduce((obj, current) => {
        obj[current.id] = current;
        return obj;
    }, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);

/*
// after the call we should have:

usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/