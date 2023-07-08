//N1 - What will be the output of this code?
let div = document.createElement("div");
document.body.prepend(div);
div.onclick = () => console.log("clicked");
div.click();

console.log(1);  // 1st

setTimeout(() => console.log(2)); // 5th

Promise.resolve().then(() => console.log(3)); // 3rd

Promise.resolve().then(() => setTimeout(() => console.log(4))); // 7th

Promise.resolve().then(() => console.log(5)); // 4th

setTimeout(() => console.log(6)); //6th

console.log(7); // 2nd

// output: clicked 1 7 3 5 2 6 4

// The click event is macrotask related, that's why it should be logged after 7 (1, 7, clicked, 3 ...)

// The reason why clicked appears the first is the following:
// The timer task source is often one of the less prioritized ones, and the UI task source one of the most prioritized ones.
// In other words, the event loop has different task sources, and the priority of tasks can vary depending on the browser implementation. User interactions, such as click events, are often given higher priority in order to provide a responsive and smooth user experience. Therefore, when a user clicks an element, the associated event handler is often executed before other tasks in the event loop, such as console logging.