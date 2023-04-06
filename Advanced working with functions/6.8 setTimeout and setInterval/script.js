//N1 - Output every second
function printNumbersInterval(from, to) {
    let x = from;

    let timer = setInterval(() => {
        alert(x);
        
        if (x == to) {
            clearInterval(timer);
        }
        
        x++;
    }, 1000)
}

printNumbersInterval(5, 10);


function printNumbersTimeout(from, to) {
    let x = from;

    setTimeout(function timer() {
        alert(x);

        if (x < to) {
            setTimeout(timer, 1000);
        }

        x++;
    }, 1000);
}

printNumbersTimeout(5, 10);



//N2 - What will setTimeout show?
let i = 0;

setTimeout(() => alert(i), 100); // 100000000 after the loop

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}