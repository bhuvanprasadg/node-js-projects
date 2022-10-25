//will contain array of user objects
/*
	[
		{
			"fullName": "John Doe",
			"email": "john.doe@gmail.com",
			"password": "secret123"
		}
	]
*/
const users = [{"fullName": "Rio Doe", "email": "rio.doe@gmail.com", "password": "rio123asd"}];

async function signupUser({ fullName, email, password }) {
  //console.log(`Inside signupUser ${fullName}, ${email}, ${password}`);
  let confirmUser = users.filter((e) => {return e.email === email});
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      if (confirmUser != []){
        //console.log(typeof confirmUser);
        users.push({fullName:fullName, email:email, password:password});
        //console.log(`Users in the main array are ${JSON.stringify(users)}`);
        resolve({
          fullName:fullName,
          email:email,
          password:password,
        });
      }
      else{
        reject("email already exists");
      }
    },2000);
  });
  //check if the email already exists
  //add a delay using setTimeout for 2000ms
  //if the user does not exist add this user to array
  //and return the user object (resolve)
  //if the email exists, throw an error
  //throw "email already exists"; (reject)
}

async function verifyEmail(email) {
  //console.log(`Inside verifyEmail ${email}`);
  let confirmEmail = users.filter((e) => {return e.email === email});
  // this is the code i tried first, but to insert setTimeout.. i made the below code..
  //if(confirmEmail != []){
  //    return true;
  //}
  //return false;
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      if(confirmEmail != []){
        resolve(true);
      }
      reject(false);
    },1000);
  });
  //add a delay using setTimeout for 1000ms
  //return true
}

async function login({ email, password }) {
  //console.log(`Inside login ${email}, ${password}`);
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      let loginDetails = users.find((e)=>{
        if (e.email === email && e.password === password){
          return true;
        }
      }); 
      //console.log(loginDetails);
      if(loginDetails === {} || loginDetails === undefined){
        reject("login credentials invalid");
        //console.log("login credentials invalid");
      }
      else{
        resolve(loginDetails);
      }
    },3000);
  });
  //add a delay of 3000ms
  //check if the combination of email and password are correct from the array of users
  //if the login combination is wrong
  //throw "login credentials invalid"
  //else if login is successful, return the user object
}

async function accessData(email) {
  //console.log(`Inside accessData ${email}`);
  return new Promise(resolve =>{
    let userFetch = users.filter((e)=>{
      return e.email === email;
    });
    resolve(userFetch);
  });
  //add a delay of 1500ms
  //fetch the data for given email from array
  //print the user details
}

async function successTestCase1() {
  let user = {
    fullName: "John Doe",
    email: "john.doe@gmail.com",
    password: "secret123",
  };

  try {
    //console.log(`Signing up the user... ${JSON.stringify(user)}`);
    let returnedUser = await signupUser(user);
    //console.log(`returnedUser after signup is ${JSON.stringify(returnedUser)}`);

    
    //console.log(`Verifying email for ${returnedUser.email}`);
    let verificationStatus = await verifyEmail(returnedUser.email);
    //console.log(`verificationStatus is ${verificationStatus}`);

    if (verificationStatus) {

      //console.log(`Attempting login for email: ${returnedUser.email}, password: ${returnedUser.password}`);
      returnedUser = await login({email:returnedUser.email,password:returnedUser.password});
      //console.log(`returnedUser after login is ${JSON.stringify(returnedUser)}`);

      //console.log(`Accessing data for email: ${returnedUser.email}`);
      returnedUser = await accessData(returnedUser.email);
      //console.log(`returnedUser after accessData is ${JSON.stringify(returnedUser)}`);
    }
    
  } catch (e) {
    console.log(`error happened for testCase 1: ${e}`);
  }
}

async function successTestCase2(){
  let user = {
    fullName: "Rose Doe",
    email: "rose.doe@gmail.com",
    password: "secret456",
  };
  try{

    await signupUser(user);

    let verificationStatus = await verifyEmail(user.email);
    //console.log(`Second User Rose is present: ${verificationStatus}`);

    if(verificationStatus){
      returnedUser = await login({email:"rose.jose@gmail.com",password:user.password});
    }

  } catch(e){
    console.log(`error happened for testCase 2: ${e}`);
  }
}

successTestCase1().then(() => {
  console.log(`Finished running successTestCase 1`);
});

successTestCase2().then(() => {
  console.log(`Finished running successTestCase 2`);
});
