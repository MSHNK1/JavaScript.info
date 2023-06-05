//N1 - Create a notification
// shows an element with the text "Hello" near the right-top of the window

function showNotification({ top = 0, right = 0, html, className }) {
    let div = document.createElement("div");
    div.innerHTML = html;
    div.className = className;
    div.classList = className + " notification";
    div.style.cssText = `
        position: fixed;
        top: ${top};
        right: ${right};
    `;
    document.body.append(div);
    setTimeout(() => div.remove(), 1500);
}

let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);