if (confirm("Would you like to see N1 task?")) {

    //for 2nd and 3rd tasks
    task2.hidden = true;
    task3.hidden = true;

    //N1 - Endless page (onscroll appending date)
    for (let i = 0; i < 20; i++) {
        document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
    }

    window.addEventListener('scroll', function () {
        let windowBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowBottom > this.document.documentElement.clientHeight + 100) return;
        document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
    });

} else if (confirm("Would you like to see N2 task?")) {
    //N2 - Up/down button (onclick to scroll to the top up)
    arrowTop.hidden = true;
    window.addEventListener("scroll", function () {
        arrowTop.hidden = (scrollY < document.documentElement.clientHeight);
    })

    arrowTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
} else {
    //N3 - Load visible images (lazyloading)
    task2.hidden = true;

    function isVisible(elem) {
        let elemTop = elem.getBoundingClientRect().top;
        let clientHeight = document.documentElement.clientHeight;
        if (elemTop - 100 < clientHeight && elem.dataset.src !== '') {
            return true;
        }
    }

    function showVisible() {
        for (let img of document.querySelectorAll('img')) {
            let realSrc = img.dataset.src;
            if (!realSrc) continue;

            if (isVisible(img)) {
                // disable caching
                // this line should be removed in production code
                realSrc += '?nocache=' + Math.random();

                img.src = realSrc;

                img.dataset.src = '';
            }
        }
    }

    window.addEventListener('scroll', showVisible);
    showVisible();
}