//N1 - Slider (button moves on click and is draggable)
let sliderLeft = slider.getBoundingClientRect().left;
let sliderRight = slider.getBoundingClientRect().left + slider.clientWidth - thumb.clientWidth;

thumb.onmousedown = function (event) {
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    let shiftY = event.clientY - thumb.getBoundingClientRect().top;

    thumb.style.position = 'absolute';
    thumb.style.zIndex = 1000;
    thumb.style.top = event.pageY - shiftY + 'px';
    document.body.append(thumb);
    moveAt(event.pageX);

    function moveAt(pageX) {
        let left = pageX - shiftX;

        if (left < sliderLeft) {
            left = sliderLeft;
        } else if (left >= sliderRight) {
            left = sliderRight;
        }
        thumb.style.left = left + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX);
    }

    document.addEventListener('mousemove', onMouseMove);

    thumb.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        thumb.onmouseup = null;
    };
}

thumb.ondragstart = function () {
    return false;
};

slider.onclick = function (event) {
    let shiftX = event.clientX - thumb.offsetWidth / 2;
    let shiftY = event.clientY - thumb.getBoundingClientRect().top;

    thumb.style.position = 'absolute';
    thumb.style.zIndex = 1000;
    thumb.style.top = event.pageY - shiftY + 'px';

    if (shiftX <= sliderLeft) {
        shiftX = sliderLeft;
    } else if (shiftX >= sliderRight) {
        shiftX = sliderRight;
    }

    thumb.style.left = shiftX + 'px';
}



//N2 - Drag superheroes around the field
let bodyLeft = body.clientLeft;
let bodyRight = bodyLeft + body.clientWidth;
let bodyTop = body.clientTop;
let bodyBottom = bodyTop + body.clientWidth;
let dragItems = document.querySelectorAll(".draggable");

dragItems.forEach(dragItem => {
    dragItem.onmousedown = function (event) {
        let shiftX = event.clientX - dragItem.getBoundingClientRect().left;
        let shiftY = event.clientY - dragItem.getBoundingClientRect().top;

        dragItem.style.position = 'absolute';
        dragItem.style.zIndex = 1000;
        document.body.append(dragItem);
        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            let left = pageX - shiftX;
            
            if (left < bodyLeft) {
                left = bodyLeft;
            } else if (left >= bodyRight) {
                left = bodyRight;
            }
            dragItem.style.left = left + 'px';
            
            
            let top = pageY - shiftY;

            if (top <= bodyTop) {
                top = bodyTop;
            } else if (top >= bodyBottom) {
                top = bodyBottom;
            }
            dragItem.style.top = top + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        dragItem.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            dragItem.onmouseup = null;
        };
    }

    dragItem.ondragstart = function () {
        return false;
    };

    dragItem.classList.add("prevent-select");
});