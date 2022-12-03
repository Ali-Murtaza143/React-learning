 

//now async await: which is a better way then the above (to handle promises)


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

    // await is used with asyn function
    // asyn keyword is used with any function then it is bydefault promise and return resolve.
    // await is used in authentication() like:
    //async function authentication(){ 
        // await function()
        // await function()
        // await function()

    // } 


   async function authenticate()
    {
        await Register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    
    }
    
// authenticate();

// console.log("other application work!");


    // sequence of execution 
    //output
    // other application work!
    // register End
    // Email end
     // Login End
    // got user data
    // displayed user data


// --------2. authenticate(function) ---------


authenticate(()=>
{
console.log("all set");

});


// sequence of execution 
    //output
    // other application work!
    // register End
    // Email end
     // Login End
    // got user data
    // displayed user data
    // all set


