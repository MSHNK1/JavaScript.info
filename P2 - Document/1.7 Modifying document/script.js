//N2 - Clear the element
function clear(elem) {
    elem.innerHTML = null;
}

clear(document.body.getElementsByTagName("ol")[0]);



//N4 - Create a list
let text = document.createElement("h1");
text.innerHTML = "Create a list";
document.body.append(text);

let ul = document.createElement("ul");
document.body.append(ul);

// //way 1
let liValue, li;
function askLi() {
    liValue = prompt("Enter the text for the list item");

    while (liValue) {
        li = document.createElement("li");
        li.textContent = liValue;
        ul.append(li);
        askLi();
    }
}
askLi();

//way 2
// while (true) {
//     let data = prompt("Enter the text for the list item", "");

//     if (!data) {
//         break;
//     }

//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }



// N5 - Create a tree from the object
// let data = {
//     "Fish": {
//         "trout": {},
//         "salmon": {}
//     },

//     "Tree": {
//         "Huge": {
//             "sequoia": {},
//             "oak": {}
//         },
//         "Flowering": {
//             "apple tree": {},
//             "magnolia": {}
//         }
//     }
// };

// function createTreeDom(obj) {
//     if (Object.keys(obj).length === 0 && obj.constructor === Object) return;

//     let ul = document.createElement('ul');

//     for (let key in obj) {
//         let li = document.createElement('li');
//         li.innerHTML = key;

//         let childrenUl = createTreeDom(obj[key]);
//         if (childrenUl) {
//             li.append(childrenUl);
//         }

//         ul.append(li);
//     }

//     return ul;
// }

// function createTree(container, obj) {
//     container.append(createTreeDom(obj));
// }

// let container = document.getElementById('container');
// createTree(container, data);



//N6 - Show descendants in a tree
let lis = document.body.querySelectorAll("ul#task-6 li");

for (let li of lis) {
    let childrenLiCount = li.querySelectorAll("li").length;

    if (!childrenLiCount) continue;

    li.firstChild.data += `[${childrenLiCount}]`;
}



//N7 - Create a calendar
function createCalendar(elem, year, month) {
    let date = new Date(year, month - 1);
    let table = `
        <table>
            <tr>
                <th>MO</th>
                <th>TU</th>
                <th>WE</th>
                <th>TH</th>
                <th>FR</th>
                <th>SA</th>
                <th>SU</th>
            </tr>
            <tr>
    `;

    for (let day = 0; day < getDay(date); day++) {
        table += '<td></td>';
    }

    while (date.getMonth() == (month - 1)) {
        table += '<td>' + date.getDate() + '</td>';

        if (getDay(date) % 7 == 6) {
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar(calendar, 2012, 9);



//N8 - Colored clock with setInterval
let timer;
let hours = "hh";
let minutes = "mm";
let seconds = "ss";
let showTime = `${hours}` + ":" + `${minutes}` + ":" + `${seconds}`;
let timeDiv = document.createElement("div");
timeDiv.innerHTML = showTime;

calendar.append(timeDiv);


function clockUpdate() {
    let time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    showTime = `${hours}` + ":" + `${minutes}` + ":" + `${seconds}`;
    timeDiv.innerHTML = showTime;
}

function clockStart() {
    clockUpdate();
    timer = setInterval(() => {
        clockUpdate();
    }, 1000);
}

function clockStop() {
    clearInterval(timer);
}



//N9 - Insert the HTML in the list
let twoLis = `
    <li>2</li>
    <li>3</li>
`;

one.insertAdjacentHTML('afterend', twoLis);



//N10 - Sort the table
let sortedRows = Array.from(table.tBodies[0].rows)
    .sort((row1, row2) => row1.cells[0].innerHTML.localeCompare(row2.cells[0].innerHTML));

table.tBodies[0].append(...sortedRows);