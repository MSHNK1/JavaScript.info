//N1 - Selectable list
ul.onclick = function (e) {
    if (e.target.tagName != "LI") return;

    if (e.ctrlKey || e.metaKey) {
        e.target.classList.add("selected");
        return;
    }

    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].classList.remove("selected");
    }

    e.target.classList.add("selected");

}

ul.onmousedown = function () {
    return false;
};