//N1 - Filter unique array members with set()
function unique(arr) {
    return Array.from(new Set(arr))
}

let valuess = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(valuess)); // Hare, Krishna, :-O



//N2 - Filter anagrams with map()
function aclean(arr2) {
    let map = new Map();
    let uniqueWord;
    arr2.forEach(element => {
        uniqueWord = element.toLowerCase().split("").sort().join("");
        if (!map.has(uniqueWord)) {
            map.set(uniqueWord, element)
        } 
    });

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"



//N3 - Iterable keys with map() map.keys() map.values()
let map = new Map();

map.set("name", "Nick");

let keys = Array.from(map.keys());
let values = Array.from(map.values());

// Error: keys.push is not a function
keys.push("nickname");
values.push("MSHNK1");
console.log(keys); // ['name', 'nickname']
console.log(Array.from(map.keys())); // ['name']
console.log(values); // ['Nick', 'MSHNK1']
console.log(Array.from(map.values())); // ['Nick']



let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference
console.log(array[0]);