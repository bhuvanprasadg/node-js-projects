if (document.querySelector(".regex")){
    let regex = document.querySelector(".regex").value;
    let regexOriginal = new RegExp(regex);
}
function regexValidation(){

    let trueString1 = document.querySelector(".trueString1").value;
    let trueString2 = document.querySelector(".trueString2").value;
    let trueString3 = document.querySelector(".trueString3").value;

    let falseString1 = document.querySelector(".falseString1").value;
    let falseString2 = document.querySelector(".falseString2").value;
    let falseString3 = document.querySelector(".falseString3").value;


    stringValidation(trueString1,1);
    //stringValidation(regex,trueString2,2);
    //stringValidation(regex,trueString3,3);
    //stringValidation(regex,falseString1,4);
    //stringValidation(regex,falseString2,5);
    //stringValidation(regex,falseString3,6);
}
function stringValidation(stringValue, iter){

    iter = iter.toString();
    query = ".message"+iter;

    if(stringValue.length == 0){
        document.querySelector(query).innerHTML="EMPTY";
        return;
    }

    //^[0-9]*$
    let result = this.regexOriginal.test(stringValue);

    if(parseInt(iter)>3){
        if(result === true)
            result = false;
        else
            result = true;
    }
    //console.log(`Ok data ${iter} it has ${result}`);
    if(result){
        document.querySelector(query).innerHTML="OK";
    }
    else{
        document.querySelector(query).innerHTML="NOK";
    }
}