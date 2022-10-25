let users = [];
function validation(){
    let firstName  = document.querySelector(".firstname");
    let lastName = document.querySelector(".lastname");
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");
    let password2 = document.querySelector(".password2");
    let pan = document.querySelector(".pan");

    var regName = /^[a-zA-Z]+[a-zA-Z]$/;
    var regMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var regPan = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    

    let id = 0;
    if(regName.test(firstName.value)){
        firstName.style.border = "1px rgb(9, 155, 9) solid";
        id+=1;

        if (regName.test(lastName.value)){
            lastName.style.border = "1px rgb(9, 155, 9) solid";
        }
    }
    else{
        firstName.style.border = "1px rgb(155, 9, 9) solid";
    }
    
    if(regMail.test(email.value)){
        email.style.border = "1px rgb(9, 155, 9) solid";
        id+=1;
    }
    else{
        email.style.border = "1px rgb(155, 9, 9) solid";
    }
    
    if(regPass.test(password.value) && password.value === password2.value){
        password.style.border = "1px rgb(9, 155, 9) solid";
        password2.style.border = "1px rgb(9, 155, 9) solid";
        id+=1;
    }
    else{
        password.style.border = "1px rgb(155, 9, 9) solid";
        password2.style.border = "1px rgb(155, 9, 9) solid";
    }
    
    if(regPan.test(pan.value)){
        pan.style.border = "1px rgb(9, 155, 9) solid";
        id+=1;
    }
    else{
        pan.style.border = "1px rgb(155, 9, 9) solid";
    }
    if(id>=4){
        console.log("done!");
        myFunction(firstName.value,lastName.value,email.value,pan.value,password.value);
    }
}
function myFunction(firstname,lastname,email,pan,password){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.pan = pan;
    this.password = password;
    users.push({"firstname":this.firstname, "lastname":this.lastname, "email":this.email, "pan":this.pan, "password":this.password});
    console.log(users);
}