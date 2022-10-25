var submitIp = document.querySelector(".submitIp");

var principal = document.querySelector(".principal");
var rate = document.querySelector(".rate");
var time = document.querySelector(".time");

function onCalculate(){
    principal = parseInt(principal.value);
    rate = parseInt(rate.value);
    time = parseInt(time.value);

    let rateP = rate/100;
    let expo = 12*time;
    let di = 1+(rateP/12);
    let low = di**expo;
    let totalValue = principal*low;

    document.querySelector(".result").value = totalValue;
    document.querySelector(".returns").value = totalValue - principal;
    document.querySelector(".invest").value = principal;
}

submitIp.addEventListener("click",onCalculate);
