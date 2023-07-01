//N1 - Add an option to select
alert("value: " + genres.options[genres.selectedIndex].value + " text: " + genres.options[genres.selectedIndex].text);

let newOption = new Option("Classic", "classic");
newOption.selected = true;
genres.append(newOption);
