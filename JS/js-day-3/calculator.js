var addButton = document.querySelector(".addButton");
var subButton = document.querySelector(".subButton");
var mulButton = document.querySelector(".mulButton");
var divButton = document.querySelector(".divButton");
var powButton = document.querySelector(".powButton");
var modButton = document.querySelector(".modButton");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
function onAdd(){
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    document.querySelector(".result").value = input1 + input2;
}
function onSubtract(){
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    document.querySelector(".result").value = input1 - input2;
}
function onMultiply(){
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    document.querySelector(".result").value = input1 * input2;
}
function onDiv(){
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    document.querySelector(".result").value = input1 / input2;
}
function onPower(){
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    document.querySelector(".result").value = input1 ** input2;
}
function onModulo(){
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    document.querySelector(".result").value = input1 % input2;
}
addButton.addEventListener("click",onAdd);
subButton.addEventListener("click",onSubtract);
mulButton.addEventListener("click",onMultiply);
divButton.addEventListener("click",onDiv);
powButton.addEventListener("click",onPower);
modButton.addEventListener("click",onModulo);