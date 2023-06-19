//N1 - Hide messages with delegation
container.addEventListener("click", function (e) {
    if (e.target.className != "remove-button") return;
    e.target.closest(".pane").remove();
})



//N2 - Tree menu
for (let li of tree.querySelectorAll('li')) {
    let p = document.createElement('p');
    li.prepend(p);
    p.append(p.nextSibling);
}

tree.addEventListener("click", function (e) {

    if (e.target.tagName != 'P') {
        return;
    }

    let childrenContainer = e.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
})




//N3 - Sortable Table
grid.onclick = function (e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');
    let rowsArray = Array.from(tbody.rows);
    let compare;

    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }

    rowsArray.sort(compare);
    tbody.append(...rowsArray);
}



//N4 - Tooltip behaviour
let tooltipElem;

document.onmouseover = function (event) {
    let target = event.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; 

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
};