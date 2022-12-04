// callback function considered as first class citizen , that take a function passes into another function 
// A function that is being passed  as an argument is called callback function

// pass function y inside another function this is called aa callback function
   
// function x(y){

// };

// x(function y(){

// })



// Example 01 -
setTimeout(function(){
    console.log("timer")
},5000); 

function x(y){
    console.log("x");
    y();
};

x(function y(){
console.log("y");
})

// ouput x y timer (after 5 seconds 'async')



// Example 02- Fetching posts from server:

let posts = [
    {title: "Post one", body:"This  is  post one"},
    {title: "Post two", body:"This  is  post two"}
]

let getPosts = ()=>{
    setTimeout(()=>{
        let output = ""
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML =output
    }, 3000)
}

let createPosts = (post, callback)=>{
    setTimeout(()=>{
        posts.push(post)
        callback();
    }, 2000)
}

getPosts()
createPosts({title:"Post three", body:"This is post three"}, getPosts)
