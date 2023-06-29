//N1 - Extended hotkeys (simultaneously pressing some keys)
function runOnKeys(func, ...codes) {
    let keys = [];

    document.addEventListener("keydown", function (event) {
        keys.push(event.code);
        console.log("object1", keys);

        for (let code of codes) {
            if (!keys.includes(code)) {
                return;
            }
        }

        keys = [];

        func();
    })

    document.addEventListener("keyup", function (event) {
        let keyIndex = keys.indexOf(event.code);

        if (keyIndex > -1) {
            keys.splice(keyIndex, 1);
        }
    })
}

runOnKeys(
    () => alert("Hello!"),
    "KeyQ",
    "KeyW"
);