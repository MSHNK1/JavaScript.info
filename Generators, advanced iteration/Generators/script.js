//N1 - Pseudo-random generator
function* pseudoRandom(seed) {
    let result = seed;

    for (let i = 0; i < Infinity; i++) {
        result = result * 16807 % 2147483647;
        yield result;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073