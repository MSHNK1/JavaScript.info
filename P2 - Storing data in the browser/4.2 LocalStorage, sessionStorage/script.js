//N1 - Autosave a form field
area.value = localStorage.getItem("textArea");

area.oninput = () => {
    localStorage.setItem("textArea", area.value)
};  