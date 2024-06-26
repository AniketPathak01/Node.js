// // importing another file in this file

// const app = require("./app")


// // console.log("hello");

// // let a = 20;
// // let b = 10;
// //  console.log(a+b)

// console.log(app)

// //interview question uses of filter 
// //filter only used in array to find specific value in array or filter value in array

// const arr = [5,1,4,37,8,2,3,4,8,3]

// console.log(arr)

// let result = arr.filter((item)=>{
//     return item > 10
// })
// console.log(result)

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("please enter your name : ", (name) =>{
//     console.log("you entered : " +name);
//     rl.close()

// })

//Lec 5

let fs = require('fs');
//synchonoly reading file
// let textIn = fs.readFileSync('./files/input.txt', 'utf-8');
// console.log(textIn);

// let content = `Data read from input.txt ${textIn} \nToday date ${new Date()}`

// fs.writeFileSync('./files/output.txt',content)

//Asynchronusly readding file

fs.readFile('./files/input.txt','utf-8',(error,data)=>{
    console.log(data);
    // console.log(error) Error when file not available or some other can aslo occured
})
console.log("Reading file.....")