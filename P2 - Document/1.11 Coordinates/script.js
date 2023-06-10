//N1 - Find window coordinates of the field
let coordinates = field.getBoundingClientRect();
let upperLeft_outer = [coordinates.left, coordinates.top];
let bottomRight_outer = [coordinates.right, coordinates.bottom];
console.log('upperLeft_outer: ' + upperLeft_outer);
console.log('bottomRight_outer: ' + bottomRight_outer);

let upperLeft_Inner = [upperLeft_outer[0] + field.clientLeft, upperLeft_outer[1] + field.clientLeft];
console.log('upperLeft_Inner' + upperLeft_Inner);

let bottomRight_inner = [upperLeft_Inner[0] + field.clientWidth, upperLeft_Inner[1] + field.clientHeight];
console.log('bottomRight_inner' + bottomRight_inner);



//N2 - Show a note near the element (This task works, however is commented, because the next task (N3) is associated with the same task (N2). To see difference, uncomment this (N2) and comment next one (N3))

// function positionAt(anchor, position, elem) {
//     document.body.style = "height: 2000px"
//     let anchorCoords = anchor.getBoundingClientRect();
//     let elemCoords = elem.getBoundingClientRect();

//     if (position == 'top') {
//         elem.style.cssText = `top: ${anchorCoords.top - elemCoords.height}; left: ${anchorCoords.left}`
//     }
//     if (position == 'right') {
//         elem.style.cssText = `top: ${anchorCoords.top}; left: ${anchorCoords.right}`
//     }
//     if (position == 'bottom') {
//         elem.style.cssText = `top: ${anchorCoords.bottom }; left: ${anchorCoords.left}`
//     }
// }

// function showNote(anchor, position, html) {

//     let note = document.createElement('div');
//     note.className = "note";
//     note.innerHTML = html;
//     document.body.append(note);

//     positionAt(anchor, position, note);
// }

// let blockquote = document.querySelector('blockquote');

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");



//N3 - Show a note near the element (absolute)
//N4 - Position the note inside (absolute)
function positionAt(anchor, position, elem) {
    document.body.style = "height: 2000px;"
    anchor.style = "position: relative;"
    let anchorCoords = anchor.getBoundingClientRect();
    let elemCoords = elem.getBoundingClientRect();

    if (position == 'top' || position == "top-out") {
        elem.style.cssText = `position: absolute; top: ${anchorCoords.top - elemCoords.height}; left: ${anchorCoords.left}`
    }
    if (position == 'right' || position == "right-out") {
        elem.style.cssText = `position: absolute; top: ${anchorCoords.top}; left: ${anchorCoords.right}`
    }
    if (position == 'bottom') {
        elem.style.cssText = `position: absolute; top: ${anchorCoords.bottom }; left: ${anchorCoords.left}`
    }
    if (position == "top-in") {
        elem.style.cssText = `position: absolute; top: ${anchorCoords.top}; left: ${anchorCoords.left}`
    }
    if (position == 'bottom-in') {
        elem.style.cssText = `position: absolute; top: ${anchorCoords.bottom - elemCoords.height}; left: ${anchorCoords.left}`
    }

}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");