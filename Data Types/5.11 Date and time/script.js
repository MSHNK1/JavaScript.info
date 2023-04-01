// N1 - Create a date
alert(new Date(2012, 1, 20, 3, 12));
alert(new Date("2012-02-20T03:12"));



//N2 - Show a weekday
function getWeekDay(date) {
    let day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"]
    return day[date.getDay()];
    
    //alternative approach
    // return date.toDateString().slice(0, 2).toUpperCase();
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"



//N3 - European weekday
function getLocalDay(date) {
    return date.getDay();
}

let newDate = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(newDate) );       // tuesday, should show 2



//N4 - Which day of month was many days ago?
function getDateAgo(date, days) {
    return new Date((date - days * 24 * 3600 * 1000));

    //alternative approach
    // let dateCopy = new Date(date);

    // dateCopy.setDate(date.getDate() - days);
    // return dateCopy.getDate();
}

let newDate2 = new Date(2015, 0, 2);

alert( getDateAgo(newDate2, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(newDate2, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(newDate2, 365) ); // 2, (2 Jan 2014)



//N5 - Last day of month?
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return alert(date.getDate());
}

getLastDayOfMonth(2012, 1);



//N6 - How many seconds have passed today?
(function getSecondsToday() {
    let now = new Date();
    let newDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    alert((now - newDay) / (1000) + " seconds passed after beginning a new day")
})();



//N7 - How many seconds till tomorrow?
(function getSecondsToday() {
    let now = new Date();
    let newDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    alert((newDay - now) / (1000) + " seconds till tomorrow")
})();



//N8 - Format the relative date
function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds

    if (diff < 1000) return 'right now';

    let sec = Math.floor(diff / 1000);
    if (sec < 60) return sec + ' sec. ago';

    let min = Math.floor(diff / 60000);
    if (min < 60) return min + ' min. ago';
}

alert(formatDate(new Date(new Date - 1))); // "right now"
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"