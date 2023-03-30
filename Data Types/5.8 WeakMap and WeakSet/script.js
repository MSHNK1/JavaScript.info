//N1 - Store "unread" flags with weakmap
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let wasMssgRead = new WeakMap();

wasMssgRead.set(messages[0]);
wasMssgRead.set(messages[1]);

for (let i = 0; i < messages.length; i++) {
    alert("Message from " + messages[i].from + ` was ${wasMssgRead.has(messages[i]) ? "read" : "not read"}`);
}



//N2 - Store read dates with weakmap
let readMssgDate = new WeakMap();

readMssgDate.set(messages[0], new Date());