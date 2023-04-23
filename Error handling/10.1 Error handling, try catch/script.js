//N1 - 
function func() {
    try {
        return alert(1);

    } catch (err) {
        /* ... */
    } finally {
        alert('finally');
    }
}

func(); // first works alert from finally, and then this one


function func2() {
    try {
        return alert(1);

    } catch (err) {
        /* ... */
    } 
}

alert('finally');
func2(); // first works alert from finally, and then this one