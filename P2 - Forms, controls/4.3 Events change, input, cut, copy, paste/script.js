// N1 - Deposit calculator
let form = document.forms.calculator;
let deposit = +form.elements.money.value;
let timeLength = form.elements.months.value / 12;
let interest = form.elements.interest.value / 100;

updateResults();

form.elements.money.oninput = updateResults;
form.elements.months.onchange = updateResults;
form.elements.interest.oninput = updateResults;

function updateResults() {
    deposit = form.elements.money.value;
    timeLength = form.elements.months.value / 12;
    interest = form.elements.interest.value / 100;

    let result = Math.round(deposit * (1 + interest) ** timeLength);
    let ratio = result / deposit;
    let greenBar = document.getElementById("height-after");
    greenBar.style.height = `${100 * ratio}px`;

    document.getElementById('money-before').innerHTML = deposit;
    document.getElementById('money-after').innerHTML = result;
}