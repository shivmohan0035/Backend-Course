 var arr=[1,2,3,4,5];
 console.log(arr.length);  //length of the array-->5

//forEach loop
arr.forEach(function(value,index){
  console.log("Value: "+value+" Index: "+index);
});

//output -

//Value: 1 Index: 0
//Value: 2 Index: 1
//Value: 3 Index: 2
//Value: 4 Index: 3
//Value: 5 Index: 4

//map loop --> makes a new array of the same length as the original array that perform some calculation on each element of the original array and returns the new array
var newarr=arr.map(function(val){
  return val*2;
})
console.log(newarr);  

//output -
//[2, 4, 6, 8, 10]


//filter loop --> makes a new array  that perform some condition on each element of the original array and returns the new array
var newarr1=arr.filter(function(val){
  if(val%2===0){
    return true;
  }else{
    return false;
  }
})
console.log(newarr1);  

//output -
//[2, 4]

//reduce loop --> reduces the array to a single value by performing some calculation on each element of the original array and returns the final value
var newarr2=arr.reduce(function(accumulator,val){
  return accumulator+val;
},0)
console.log(newarr2);
//output -
//15

//find loop --> returns the first element that satisfies the condition otherwise returns undefined if element is not found
var newarr3=arr.find(function(val){
  return val>3;
})
console.log(newarr3);
//output -
//4

//indexof ->> returns the index of the first occurrence of the specified value in the array, or -1 if it is not found

var arr2=[1,2,2,3,4,5];
var newarr4=arr2.indexOf(2);
console.log(newarr4);
console.log(arr2.indexOf(6));

//output -
//1   //return index of first occurrence of 2
//-1   //return -1 if element is not found



//objects in javascript --> key - value pairs in curly braces {}. The key is a string and the value can be any data type.
var obj={
  name:"John",  
  age:30,
  city:"New York"
};
console.log(obj.length);  //undefined because objects do not have a length property
//output -
//undefined

console.log(obj);

//output -
//{ name: 'John', age: 30, city: 'New York' }

//accessing object properties
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

//output -
//John
//30
//New York

obj.age=50;
console.log(obj.age);
//output -
//50


object.freeze(obj);  //freezes the object so that no new properties can be added or existing properties can be modified
obj.age=60;
console.log(obj.age);  //age will still be 50 because the object is frozen

//output -
//50  --> not update value of age because object is frozen

//functions in javascript --> block of code that can be called and executed when needed.

function add(a,b){
  return a+b;
}
console.log(add(5,3));
//output -
//8
console.log( add.length);  //length of the function --> 2 --->no of parameters is the length of the function

function add(){
  return 20;
}
console.log(add.length);  //length of the function --> 0 --->no of parameters is the length of the function


//async functions in javascript --> functions that return a promise and can be used with await keyword to wait for the promise to resolve before continuing with the execution of the code.
async function asyncAdd(a,b){
   console.log("Inside async function");
   var blob=await fetch(`https://randmuser.me/api/`)  //fetching data from the api
   console.log(await blob.json());                     //printing the data fetched from the api
   console.log("After 2 seconds");
}
asyncAdd(5,3);
//output -
//Inside async function
//After 2 seconds 
//{ results: [ { gender: 'male', name: [Object], location: [Object]}

//await --> It pauses the execution of the async function until the promise is resolved and then returns the resolved value of the promise.
//async functions can be used to make asynchronous code look synchronous and easier to read and understand.


