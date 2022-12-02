
// improved way to handle function parameters in ES6
// it allows to represent an indefinite number of parameters as an array

// Problem in ES5

    // function sum(a,b){
    //     console.log(a+b)
    // }
    // sum(1+2+3+4+5+6);


//it handles in ES6 using Rest Parameter
// function sum(...inputs){
//     console.log(...inputs);
//     console.log(inputs);
//     let total=0;
//     for (let i of inputs){
//         total +=i;
//     }
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7)
    

function anyFun(a,b,...inputs){
    console.log(a+" " +b) // A B 
    console.log(...inputs); //C D E F G 
    console.log(inputs); // (5) ['C' 'D' 'E' 'F' 'G']
    console.log(inputs.length); //5
    console.log(inputs[3]); //F
}
anyFun("A","B","C","D","E","F", "G")
