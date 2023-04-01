//N1 - Turn the object into JSON and back
let user = {
    name: "John Smith",
    age: 35
};

alert(JSON.parse(JSON.stringify(user)));



//N2 - Exclude backreferences
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup ) {
        return undefined;
    } else {
        return value;
    }
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/