//N1 - Hide on click
function hideP() {
    text.style = "display: none;"
}

hider.addEventListener("click", hideP);



//N2 - Hide self
let button = document.createElement("button");
button.innerHTML = "Click to hide";
button.addEventListener("click", () => { button.style = "display: none;" });
document.body.append(button);



//N3 - Which handlers run?
button.addEventListener("click", () => alert("1")); //This will be run

button.removeEventListener("click", () => alert("1")); //This won't run, because this removes another function, not the previous one

button.onclick = () => alert(2); // This will be run as well



//N4 - Move the ball across the field
let coords = document.createElement("div");
coords.innerHTML = "Coordinates of the click";
text.append(coords);
field.style = "position: relative;"

let coordinates;
ball.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
`;

let fieldWidth = field.clientWidth - 4 * field.clientLeft;
let fieldHeight = field.clientHeight - 4 * field.clientTop;

field.onclick = function (e) {
    coords.innerHTML = e.clientX + ':' + e.clientY;
    let top = e.clientY - field.getBoundingClientRect().y - field.clientTop - ball.clientHeight / 2;
    let left = e.clientX - field.getBoundingClientRect().x - field.clientLeft - ball.clientWidth / 2;

    if (left < 0) {
        left = 0;
    }
    if (left > fieldWidth) {
        left = fieldWidth
    }
    if (top < 0) {
        top = 0;
    }
    if (top > fieldHeight) {
        top = fieldHeight
    }

    coordinates = {
        top: top,
        left: left
    };

    ball.style.cssText = `
        position: absolute;
        top: ${coordinates.top};
        left: ${coordinates.left};
        transition: all 1s;
    `;
};



//N5 - Create a sliding menu
let toggled = true;
let ul = document.querySelector("ul");
function toggleMenu() {
    switch (toggled) {
        case true:
            span.innerHTML = '▶ ';
            ul.style = "display: none;"
            toggled = false;
            break;

        case false:
            span.innerHTML = '▼ ';
            ul.style = "display: show;"
            toggled = true;
            break;

        default:
            break;
    }
}
toggler.addEventListener("click", toggleMenu);



//N6 - Add a closing button
let panes = document.querySelectorAll(".pane");

for (let pane of panes) {
    pane.style = "position: relative;";

    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}

let buttons = document.querySelectorAll(".pane .remove-button");

for (let button of buttons) {
    button.style.cssText = `
        position: absolute;
    `
}



//N7 - Carousel
let prevButton = carousel.querySelectorAll(".arrow")[0];
let nextButton = carousel.querySelectorAll(".arrow")[1];
let carouselUl = carousel.querySelector("ul");
let imgWidth = carousel.querySelector("li").clientWidth;
let imgHeight = carousel.querySelector("li").clientHeight;
let imgAmount = carousel.querySelectorAll("li").length;
let visibleImgs = ulContainer.clientWidth / imgWidth;
let nextImgs = imgAmount - visibleImgs;
let prevImgs = imgAmount - nextImgs - visibleImgs;

prevButton.style.cssText = `
    position: absolute;
    left: 0;
    top: ${(imgHeight - prevButton.clientHeight) / 2};
    z-index: 100;
    `;
nextButton.style.cssText = `
    position: absolute;
    right: 0;
    top: ${(imgHeight - prevButton.clientHeight) / 2};
    z-index: 100;
`;


nextButton.addEventListener("click", () => {
    if (nextImgs >= visibleImgs) {
        ulContainer.scrollBy({
            top: 0,
            left: imgWidth * visibleImgs,
            behavior: "smooth"
        });

        nextImgs -= visibleImgs;
        prevImgs = imgAmount - nextImgs - visibleImgs;

        return;
    }

    if (nextImgs < visibleImgs) {
        ulContainer.scrollBy({
            top: 0,
            left: (imgWidth * nextImgs),
            behavior: "smooth"
        });
        nextImgs = 0;
        prevImgs = imgAmount - nextImgs - visibleImgs;
    }
});

prevButton.addEventListener("click", () => {
    prevImgs = imgAmount - nextImgs - visibleImgs;;
    if (prevImgs >= visibleImgs) {
        ulContainer.scrollBy({
            top: 0,
            left: -(imgWidth * visibleImgs),
            behavior: "smooth"
        });

        prevImgs -= visibleImgs;
        nextImgs = imgAmount - prevImgs - visibleImgs

        return;
    }

    if (prevImgs < visibleImgs) {
        ulContainer.scrollBy({
            top: 0,
            left: -(imgWidth * prevImgs),
            behavior: "smooth"
        });
        prevImgs = 0;
        nextImgs = imgAmount - prevImgs - visibleImgs
    }
});