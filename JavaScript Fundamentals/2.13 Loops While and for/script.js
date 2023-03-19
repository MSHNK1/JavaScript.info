let i = 3;

while (i) {
  alert( i-- );
}
// last value will be alerted 1


let j = 0;
while (++j < 5) alert( j ); 
// 1, 2, 3, 4

let k = 0;
while (k++ < 5) alert( k );
// 1, 2, 3, 4, 5

for (let a = 0; a < 5; a++) alert( a );
// 0, 1, 2, 3, 4

for (let b = 0; b < 5; ++i) alert( b );
// 0, 1, 2, 3, 4


for (let c = 1; c <= 10; c++ ) {
    if (c % 2 == 0) {
        alert (c);
    }
}


let d = 0;

while (d < 3) {
    alert(`number ${d}!`);
    d++;
}


while (true) {
    let enteredNumber = +prompt("Enter the number: ", '');

    if (enteredNumber > 100 || !enteredNumber) {
        break
    };
}