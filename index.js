let a = new Date();
let dateNow = a.getDate();
let monthNow = a.getMonth();
let yearNow = a.getFullYear();
let dayNow = a.getDay();

let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let clockBody = document.querySelector(".clockBody");
clockBody = [hour, min, sec];

let dateDay = document.querySelector(".dateDay");
let date = document.querySelector(".date");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let day = document.querySelector(".day");
dateDay = [date, day];

function showTime() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();

    clockBody.forEach(clock => {
        hour.innerText = (h);
        min.innerText = (":" + (m));
        sec.innerText = (":" + (s));
    });
    setTimeout(showTime, 1000);

}
showTime();

dateDay.forEach(dateDay => {
    date.innerText = (dateNow);
    month.innerText = ("/" + (monthNow + 1));
    year.innerText = ("/" + (yearNow));
    if (dayNow === 1) {
        day.innerText = "Monday";
    } else if (dayNow === 2) {
        day.innerText = "Tuesday";
    } else if (dayNow === 3) {
        day.innerText = "Wednesday";
    } else if (dayNow === 4) {
        day.innerText = "Thursday";
    } else if (dayNow === 5) {
        day.innerText = "Friday";
    } else if (dayNow === 6) {
        day.innerText = "Saturday";
    } else {
        day.innerText = "Sunday";
    }

})
