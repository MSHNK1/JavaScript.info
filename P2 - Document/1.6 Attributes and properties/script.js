// N1 - Get the attribute
let elem = document.querySelector('[data-widget-name]');
let elemValue = elem.dataset.widgetName

alert(elemValue);



//N2 - Make external links orange
let anchorElems = document.querySelectorAll("a");

for (let a of anchorElems) {
    let aHref = a.getAttribute('href');

    if (!aHref || aHref.includes("http://internal.com")) continue;
    
    if (aHref.includes("://")) {
        a.style.color = 'orange';
    } 
}