//N1 - Why "return false" doesn't work?
function handler(event) {
    alert("...");
    event.preventDefault();
}



//N2 - Catch links in the element
contents.onclick = function confirmLeaving(event) {
    if (!event.target.closest("a")) return;

    if (!confirm("Do you really want to leave the page?")) {
        event.preventDefault();
    };
}



//N3 - Image gallery
thumbs.onclick = function changeImage(event) {
    if (!event.target.closest("a")) return;

    event.preventDefault();

    let src = event.target.getAttribute("src");
    let title = event.target.closest("a").getAttribute("title");
    
    largeImg.setAttribute("src", src);
    largeImg.setAttribute("alt", title);
}