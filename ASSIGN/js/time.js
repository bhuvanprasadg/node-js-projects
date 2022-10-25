let mapArray = new Map();

mapArray.set("local","5.30");
mapArray.set("gmt","0.00");
mapArray.set("ect","1.00");
mapArray.set("eet","2.00");
mapArray.set("art","2.00");
mapArray.set("eat","3.00");
mapArray.set("met","3.30");
mapArray.set("plt","5.00");
mapArray.set("bst","6.00");
mapArray.set("ctt","8.00");
mapArray.set("jst","9.00");

function onChangeTime(){
    var refreshTime = 1000;
    showTheTime = setTimeout('timeFormat()',refreshTime);
}
function timeFormat(){
    var dropdown1 = document.getElementById('dropdown1').value;
    var dropdown2 = document.getElementById('dropdown2').value;

    var date = new Date();
    date = date.toLocaleString('en-GB', {
        timeZone: 'Europe/London',
    });

    firstTime(date,dropdown1);
    secondTime(date,dropdown2);

    onChangeTime();
}

function firstTime(date,dropdown){

    var presentTime = midTerm(date,dropdown);

    document.getElementById('present').value = presentTime;
    return;
}

function secondTime(date,dropdown){

    var presentTime = midTerm(date,dropdown);

    document.getElementById('upcom').value = presentTime;
    return;
}

function midTerm(date,dropdown){
    var hours = parseInt(date.slice(12,14));
    var minutes = parseInt(date.slice(15,17));
    var today = parseInt(date.slice(0,2));
    var month = parseInt(date.slice(3,5));
    var year = parseInt(date.slice(6,10));

    let sepTime = mapArray.get(dropdown);

    let utc1 = parseInt(sepTime.slice(0,1));
    let utc2 = parseInt(sepTime.slice(2,));

    hours += utc1;
    minutes+=utc2;

    let hr = "12";
    var ele = document.getElementsByName('gender');   
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            hr = ele[i].value;
    }

    if(minutes>60){
        hours+=1;
        minutes-=60;
    }

    if (hours < 10)
        hours = '0'+hours;
    if (minutes<10)
        minutes = '0'+minutes;
    
    if(hr==="12"){
        var meridiem = "AM";
        if (hours > 12){
            hours = hours % 12;
            meridiem = "PM";
        }

        if(hours>12){
            hours-=12;
            if(meridiem === "AM"){
                meridiem = "PM"
            }
            else{
                meridiem = "AM";
                today+=1;
            }
        }
        var presentTime = `${hours}:${minutes} ${meridiem}       ${today}/${month}/${year}`;
    }
    else{
        if(hours>24){
            hours %=12;
            today+=1;
        }
        var presentTime = `${hours}:${minutes}            ${today}/${month}/${year}`;
    }
    return presentTime;
}