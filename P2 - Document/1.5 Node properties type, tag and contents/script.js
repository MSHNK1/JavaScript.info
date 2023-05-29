//N1 - Count descendants
for (let li of document.querySelectorAll("li")) {
    let name = li.firstChild.data;
    let number = li.querySelectorAll("li").length;
    // alert(name + ":" + number);
}



//N2 - What's in the nodeType?
alert(document.body.lastChild.nodeType); //



//N3 - Tag in comment
let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data ); // BODY
