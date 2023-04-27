// console.log("hi there thank you");

// to declare variables we use  var, let, const
 /*different types to define variable:
uppercase: NAME 
lowercase: name  
camel case: myName
parsel case: MyName */
// defining variable = "assigning value"
// var name = "Aashutosh Neupane";
// let address = "somewhere in Canberra";
// const dob = "20/20/2020";
// console.log(name);

// name = "Aashutos"
// console.log(name);

// -------------operators-------------------

// let a = 5
// const b = 6

// const ans = a+b (addition)
// const ans = a-b subtraction
// const ans = a*b multiplication
// const ans = a**b to the power
// const ans = a/b division
// const ans = a%b modular
// a++; increases the value by 1 
// a-- ; decreases the value by 1
// console.log(a) value inside bracket is printed in console

// comparisons:
// const v1 = 5
// const v2 = 5

// const result = v1 == v2 it checks if the value in v1 and v2 are same and then return true
// const result = v1 === v2 it checks if the value in v1 and v2 are same both in value and datatype and then return true
// const result = v1 > v2
// const result = v1 < v2
// const result = v1 <= v2
// const result = v1 >= v2 

// console.log(result)

// ------------Data types 
// const val = "Ash"
// const val = 12
// const val = undefined
// const val = null
// const val = true
//const obj = {
 //   name: "ash"
//}

//console.log(typeof obj)

//math obj

// value of pi 
// const val = Math.PI
// console.log(val)

//round off
// const val = Math.round(7.8)

// console.log(val)

// rounds off to lesser value regardless of what value is behind the . in decimal
// const val = Math.floor(7.8)
// console.log(val)

// rounds off to upper value regardless of what value is behind the . in decimal
// const val = Math.ceil(7.9)
// console.log(val)

//to give power
// const val = Math.pow(7, 2)
// console.log(val)

// square root 
// const val = Math.sqrt(7)
// console.log(val)

// min value in a list 
// const val = Math.min(0, 10, 15, 2, 3)
// console.log(val)

// max value in a list 
// const val = Math.max(0, 10, 15, 2, 3)
// console.log(val)

// to generate random number
// const val = Math.random()*10 
// console.log(val)

/* logical operators:
&& :and
|| :or 
! :
Temary :
conditional operations :
if
if else
else if 
switch*/

/* truthy value: if variable has following values, it returns true by defult: "p", 4, ture, {}, [], ()=> {}*/
/*falsy value: if variable has following values, it returns true by defult: "", 0, undefined, null, false*/ 

// const age = 17
// if(age >=18){
//     console.log("welcome to our pub")
// } 
// else{
//     console.log("go home kiddo")
// }

const pet = "cat"
const g = "fe"
// using and 
// if (pet === "cow" && g ==="fe"){
//     console.log("meow")
// }
// // using or 
// if (pet === "cow" || g ==="fe"){
//     console.log("meow")
//     console.log("female")
// }
// using ! (not)
if (pet !== "cow" ){
        console.log("meow")
    }


//  else if(pet === "dog"){
//     console.log("wooff")
// }else if(pet === "cow"){
//     console.log("moooo")
// }
// else {
//     console.log("alien sound")
// }
// using tenary
age= 17
age >=18
?
    console.log("welcome to our pub")
:
console.log("go home kiddo")
// using switch 
// const pet = "dog";
// switch (pet){
//     case "cat":
//         console.log("meow")
//         break;
//     case "dog":
//           console.log("wooff")
//           break;
//     default:
//         console.log("rjbfsdjfbwjfbwj")
// }

// error handling -==============
// try{
//     // throw new Error("E2392")
//     console.log("with in try")
// } catch (error) {
//     // if (error.messgae === "E2392"){
//         // email to xxxxxx
//     // }
//     console.log("with in error", error)
// } finally{
//     console.log("with in finally")
// }

// Schedulling ---========-=-=--=-=-=-=-=-=-=
// console.log("before set time out");
// setTimeout(()=>{
//     console.log("inside set time out");
// }, 3000)
// let i = 0
// const interval = setInterval(()=>{
    
//     console.log("inside set interval", i++ );
//     if (i ==1){
//         clearInterval(interval)
//     }
// }, 1000)

// function ===--=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log("before function")
// function add(){
//     console.log(4+6)
// }
// console.log(add())
// console.log("after function")


// function add(a, b){
//    return a+b 
// }
// const ans = add (5,6)
// console.log(ans)
// const ans2 = add (534,634)
// console.log(ans2)

//=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ES6 version template literal and arrow function
const multiplayer = (a)=> a *5;

const bio = (name , address)=> {
    // const str = "hello, i am " + name + " . And i live in " + address;
    // return str;
    // return "hello, i am " + name + " . And i live in " + address;
    return `
    My name is ${name}. I have been living in ${address}
    `;

}
const ash = bio("Aashutosh Neupane" ,"Sydney")
console.log(ash)

const asaauh = bio("afdgv Neusdfdse" ,"dfsdfdsf")
console.log(asaauh)
