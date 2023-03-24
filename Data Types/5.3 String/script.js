// N1
function ucFirst(str) {
    return alert(str[0].toUpperCase() + str.slice(1));
}

ucFirst("john");

//N2
function checkSpam(str) {
    let lowerCaseStr = str.toLowerCase();
    let checkContain = lowerCaseStr.includes("viagra") || lowerCaseStr.includes("xxx");

    return alert(checkContain);
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

//N3
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return alert(str.slice(0, maxlength - 1) + "...")
    } else {
        return alert(str.slice(0, maxlength - 1))
    }
}

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);


//N4
function extractCurrencyValue(str) {
    return +str.slice(1)
}

alert( extractCurrencyValue('$120') === 120 );