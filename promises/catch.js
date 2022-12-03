
// promises 
//error handle
// regsiter function has error then and promise reject has been called, 
// then handle that error by using catch().
// resolve() --- then()
// reject() --- catch()

function Register(){
    return new Promise((resolve,reject)=>
    {   setTimeout(() => {
       return  reject("Error while registering");
        console.log("register end")
       
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
    
    
// Register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)
// .catch((err)=>{
//  console.log("Error",err);
//     });


console.log("other application work!");
    

    //output
    //other application work!
    // Error Error while registering
    
//end




//using awaits 
// method-1

//  async authenticate(function) and error handling  then we 
// pass reject in any function--------




//     async function authenticate()
//     {
//         await Register();
//         await sendEmail();
//         await login();
//         await getUserData();
//         await displayUserData();
    
//     }
    


// authenticate(()=>
// {
// console.log("all set");
// }).catch((err)=>{

//     console.log(err);

// });


// output
//other application work!
//Error while registering



// method-2


async function authenticate()
{
try{
    await Register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();

}catch(err){
console.log(err);

}
}


authenticate().then(()=>
{
console.log("all set");

});


//output

// other application work!
// Error while registering
// all set
