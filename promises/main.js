
// callback hell  --- nesting function 
//promises -- used to avoid the nesting 
// promises are  objects which keeps track about whter certain event has 
// already happened or not.


// There are 3 stages of promise
// 1.pending
// 2.resolve
// 3.reject


// Scenario 

// 1. Register 

// 2. send welcome email 

// 3. login

// 4. get user data 

// 5. display user data



// promises object with new keyword and inside it, there is function 
// (resolve or reject) 
// reject calls when there is error in code 
// resolve-- calls when work is done (code execuated with seqence)
//

// function Register(){
// return new Promise((resolve,reject)=>
// {   setTimeout(() => {
//     console.log("register end")
//     resolve();
// }, 1000);


// })


// };

// function sendEmail(){
//     setTimeout(() => {
//     console.log("Email end")
    
//     }, 1000);



// };

// function login(){
//     setTimeout(() => {
//         console.log("Login End")
      
//     }, 3000);

// };

// function getUserData()
// {
//     setTimeout(() => {
//         console.log("got user data")

// }, 1000);
   
// };


// function displayUserData()
// {
//     setTimeout(() => {
//         console.log("displayed user data")
// }, 5000);

// };



// //function.then().then().......
// // then(simple/arrow function) 

// Register().then(sendEmail).then(login).then(getUserData).then(displayUserData);



// console.log("other application work!");


// sequence of execution because the promises only on register function

//output
// other application work!
// register End
// Email end
// got user data
// Login End
// displayed user data






// promises (resolve on every function)

function Register(){
    return new Promise((resolve,reject)=>
    {   setTimeout(() => {
        console.log("register end")
        resolve();
    }, 1000);
    
    })
    
    };
    
    function sendEmail(){
        return new Promise((resolve,reject)=>
        {   setTimeout(() => {
            console.log("Email end")
            resolve();
        }, 1000);
    })
                    };

    function login(){
        return new Promise((resolve,reject)=>
        {   setTimeout(() => {
            console.log("Login End")
            resolve();
        }, 1000);
     })
    };
    
    function getUserData()
    {
        return new Promise((resolve,reject)=>
        {   setTimeout(() => {
            console.log("got user data")
    
            resolve();
        }, 1000);
     })

    };
    
    function displayUserData()
    {
        return new Promise((resolve,reject)=>
        {   setTimeout(() => {
            console.log("displayed user data")
    
            resolve();
        }, 1000);
     })
    };
    
    //function.then().then().......
    // then(simple/arrow function) 
    
    
Register()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData);
    
console.log("other application work!");
    

    
    // sequence of execution 
    //output
    // other application work!
    // register End
    // Email end
    // got user data
    // Login End
    // displayed user data
    
    