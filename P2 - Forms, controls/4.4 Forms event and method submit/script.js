//N1 - Modal form
let btn1 = document.createElement("button");
btn1.innerHTML = "Click to show the form";
document.body.prepend(btn1);

let heading1 = document.createElement("h1");
heading1.innerHTML = "Click the button below";
document.body.prepend(heading1);

let promptFormContainer = document.getElementById("prompt-form-container");
let promptMessage = document.getElementById("prompt-message");
let form = document.getElementById("prompt-form");

btn1.onclick = function showModal() {
    promptFormContainer.hidden = false;
    document.body.style.overflowY = "hidden";
    form.elements.text.focus();

    showPrompt("Enter something<br>...smart :)", function (value) {
        alert("You entered: " + value);
        promptFormContainer.hidden = true;
    });
}

function showPrompt(html, callback) {
    promptMessage.innerHTML = html;

    let firstInput = form.elements[0];
    let lastInput = form.elements[form.elements.length - 1];

    lastInput.onkeydown = (event) => {
        if (event.key == "Tab" && !event.shiftKey) {
            firstInput.focus();
            return false;
        }
    }

    firstInput.onkeydown = (event) => {
        if (event.key == "Tab" && event.shiftKey) {
            lastInput.focus();
            return false;
        }
    }

    function completeForm(value) {        
        callback(value);
    }

    form.onsubmit = () => {
        value = form.elements.text.value;

        if (!value) return false;

        completeForm(value);
        return false; // to avoid sending data to the server which doesn't exist in this case
    };

    let cancelBtn = form.elements.cancel;
    cancelBtn.onclick = () => completeForm(null)
}