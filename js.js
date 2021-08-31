

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

setInterval(function() {
    var today = new Date();

    // Date
    var days = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    var restDays = 0;
    while (month != -1) {
        restDays += daysInMonth(month, year);
        month--;
    }
    var month = today.getMonth();
    restDays = 365 - restDays + (days - daysInMonth(month, year));
    // Time
    var timeHours = 24 - today.getHours();
    var timeMinutes = 60 - today.getMinutes();
    var timeSeconds = 60 - today.getSeconds();

    if(timeSeconds < 10)
        timeSeconds = '0' + timeSeconds;
    if(timeMinutes < 10)
        timeMinutes = '0' + timeMinutes;
    if(timeHours < 10)
        timeHours = '0' + timeHours;
    //js to HTML
    document.getElementById("seconds").innerHTML = timeSeconds;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("days").innerHTML = restDays;
    document.getElementById("newyear").innerHTML = year + 1;


}, 1000);
