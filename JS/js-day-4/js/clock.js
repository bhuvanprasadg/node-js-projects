function changeTime(){
    var refreshTime = 1000;
    showTheTime = setTimeout('timeFormat()',refreshTime);
}

function timeFormat(){
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var meridiem = "AM";
    if (hours > 12)
        hours = hours % 12;
        meridiem = "PM";
    
    if (hours < 10)
        hours = '0'+hours;
    if (minutes<10)
        minutes = '0'+minutes;
    if (seconds<10)
        seconds = '0'+seconds;
    
    var presentTime = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById('time').innerHTML = presentTime;
    changeTime();
}