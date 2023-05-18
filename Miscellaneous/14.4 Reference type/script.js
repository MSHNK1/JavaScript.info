// N1 - Syntax check
let user = {
    name: "John",
    go() { alert(this.name) }
};

(user.go)(); // "john" - because in object there is no go(), there is go:


//N2 - Explain the value of "this"
let obj, method;

obj = {
    go: function () { alert(this); }
};

obj.go();               // (1) [object Object] - regular call

(obj.go)();             // (2) [object Object] - regular call

(method = obj.go)();    // (3) undefined - method() fires, so method function doesn't exist

(obj.go || obj.stop)(); // (4) undefined - || loses "this"