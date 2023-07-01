//N1 - Editable div
let view = document.getElementById("view");
let textArea = document.createElement("textarea");

view.onclick = function () {
    textArea.classList.add("edit");
    textArea.value = view.innerHTML;
    view.replaceWith(textArea);

    textArea.focus();

    textArea.onkeydown = function (event) {
        if (event.key == "Enter") {
            transformToDiv();
        }
    }

    textArea.onblur = function () {
        transformToDiv();
    }
}

function transformToDiv() {
    view.innerHTML = textArea.value;
    textArea.replaceWith(view);
}



//N2 - Edit TD on click
let baguaTable = document.getElementById("bagua-table");
let area = document.createElement("textarea");
let target;
let initialInnerHTML;
let newInnerHTML;

baguaTable.onclick = function (event) {
    target = event.target.closest("TD");

    if (!baguaTable.contains(target)) return;

    if (document.querySelectorAll(".edit-td")[0] && !target.className.includes("edit-td")) return;

    newInnerHTML = area.value;

    if (!target.className.includes("edit-td")) {
        initialInnerHTML = target.innerHTML;

        target.classList.add("edit-td");
        area.classList.add("edit-area");
        area.style = `width: ${target.clientWidth}px; height: ${target.clientHeight}px;`;
        area.value = target.innerHTML;
        target.innerHTML = "";
        target.append(area);

        target.insertAdjacentHTML("beforeEnd",
            '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
        );
    }

    if (event.target.className.includes("edit-cancel")) {
        cancelEditing();
    } else if (event.target.className.includes("edit-ok")) {
        finishEditing();
    }
}

function cancelEditing() {
    target.innerHTML = initialInnerHTML;
    target.classList.remove("edit-td");
}

function finishEditing() {
    target.innerHTML = newInnerHTML;
    target.classList.remove("edit-td");
}



//N3 - Keyboard-driven mouse
mouse.setAttribute("tabindex", 0);
mouse.onclick = function () {
    mouse.focus();
    mouse.style = `
        position: fixed;
        top: ${mouse.getBoundingClientRect().y}px;
        left: ${mouse.getBoundingClientRect().x}px;
    `;

    mouse.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowRight":
                mouse.style.left = `${mouse.getBoundingClientRect().x + mouse.offsetWidth}px`;
                break;
            case "ArrowLeft":
                mouse.style.left = `${mouse.getBoundingClientRect().x - mouse.offsetWidth}px`;
                break;
            case "ArrowUp":
                mouse.style.top = `${mouse.getBoundingClientRect().y - mouse.offsetHeight}px`;
                break;
            case "ArrowDown":
                mouse.style.top = `${mouse.getBoundingClientRect().y + mouse.offsetHeight}px`;
                break;

            default:
                break;
        }
    })
}