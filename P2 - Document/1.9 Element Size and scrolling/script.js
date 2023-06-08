//N1 - What's the scroll from the bottom?
let elem = document.createElement("p");
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;


//N2 - What is the scrollbar width?
let div = document.createElement("div");
div.style.cssText = `
    width: 100px;
    height: 100px;
    overflow: scroll;
`
document.body.append(div);

let scrollWidth = div.offsetWidth - div.clientWidth;
console.log(scrollWidth);
alert(scrollWidth);



//N3 - Place the ball in the field center
let fieldWidth = field.clientWidth;
let fieldHeight = field.clientHeight;

let ballWidth = ball.clientWidth;
let ballHeight = ball.clientHeight;

ball.style.left = `${(fieldWidth - ballWidth) / 2}px`;
ball.style.top = `${(fieldHeight - ballHeight) / 2}px`;
