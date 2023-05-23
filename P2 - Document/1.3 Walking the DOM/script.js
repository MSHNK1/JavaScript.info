// N1 - DOM children
alert("For <div>");
alert(document.documentElement.children[0].nextElementSibling.children[0]);
alert(document.documentElement.firstElementChild.nextElementSibling.children[0]);
alert(document.documentElement.lastElementChild.children[0]);
alert(document.body.children[0]);
alert(document.body.firstElementChild);
alert(document.body.lastElementChild.previousElementSibling.previousElementSibling);

alert("For <ul>");
alert(document.documentElement.children[0].nextElementSibling.children[1]);
alert(document.documentElement.firstElementChild.nextElementSibling.children[1]);
alert(document.documentElement.lastElementChild.children[1]);
alert(document.body.children[1]);
alert(document.body.lastElementChild.previousElementSibling);

alert("For <li>");
alert(document.documentElement.children[0].nextElementSibling.children[1].children[0]);
alert(document.documentElement.firstElementChild.nextElementSibling.children[1].children[0]);
alert(document.documentElement.lastElementChild.children[1].children[0]);
alert(document.body.children[1].children[0]);
alert(document.body.lastElementChild.previousElementSibling.children[0]);


//N3 - The sibling question

let table = document.body.firstElementChild;
let tdNumberInRow = table.rows.length;
// alert(tdNumberInRow);
for (let i = 0; i < tdNumberInRow; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}