//  creating an array
// syntax-1
const myArray = [0, 1, 2, 3, 4];


console.log(myArray); //0 1 2 3 4
console.log(myArray[3]); //3
console.log(myArray[32]); //undefined
console.log(myArray[-1]);//undefined


//length() how many items in your array (length of an array)
console.log(myArray.length); //5

//concat() : it is new array used to join the array
// syntax-2 (an array)
const myCars = new Array("audi", "mehran", "BMW");
console.log(myCars.concat(myArray)); //"audi", "mehran", "BMW" , 0 1 2 3 4

// forEach array method - it require callback 
// syntax 
// myArray.forEach(callback/ arrow fuction )


myArray.forEach((item,index,arr)=>{
  console.log(item);}); // 0 1 2 3 4



// find() - is used to search insdie an array (if it doesnot find it return undefine)

const ages = [12, 34, 56, 13];
checkage = (age) => {
  return age > 100;
};
console.log(ages.find(checkage)); //34




// map() - it will return and transform each value as a new values acc to function
const numbers = [1, 3, 6, 20];
const newNum = numbers.map((num) => {
  return num * 5;
});
console.log(newNum); //5,15,30,100



// filter() -  it filter out the data (if the data not satisfies any conidition it returns empty array []) 
const Ages = [12, 34, 56, 40];
checkage = (age) => {
  return age > 18;
};
console.log(Ages.filter(checkage)); //34,56, 40


// findIndex()
const ageS = [12, 13, 56, 14];
checkage = (age) => {
  return age > 13;
};
console.log(ageS.findIndex(checkage)); //2


// reduce()
const myNumbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(myNumbers.reduce(getSum, 7)); // reduce(function, initial value)
// // output: 31


// splice()
const fruits = ["apple", "banana", "kiwi", "lemon"];
// removing
fruits.splice(1, 2);
console.log(fruits); //apple,lemon
// adding
fruits.splice(1, 0, "banana", "kiwi"); //['apple', 'banana', 'kiwi', 'lemon']
console.log(fruits);
