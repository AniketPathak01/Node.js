// importing another file in this file

const app = require("./app")


// console.log("hello");

// let a = 20;
// let b = 10;
//  console.log(a+b)

console.log(app)

//interview question uses of filter 
//filter only used in array to find specific value in array or filter value in array

const arr = [5,1,4,37,8,2,3,4,8,3]

console.log(arr)

let result = arr.filter((item)=>{
    return item > 10
})
console.log(result)