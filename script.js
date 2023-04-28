// console.log("hi there thank you");

// to declare variables we use  var, let, const
 /*different types to define variable:
uppercase: NAME 
lowercase: name  
camel case: myName
parseint case: MyName */
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

// const pet = "cat"
// const g = "fe"
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
// if (pet !== "cow" ){
//         console.log("meow")
//     }


//  else if(pet === "dog"){
//     console.log("wooff")
// }else if(pet === "cow"){
//     console.log("moooo")
// }
// else {
//     console.log("alien sound")
// }
// using tenary
// age= 17
// age >=18
// ?
//     console.log("welcome to our pub")
// :
// console.log("go home kiddo")
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
// const multiplayer = (a)=> a *5;

// const bio = (name , address)=> {
    // const str = "hello, i am " + name + " . And i live in " + address;
    // return str;
    // return "hello, i am " + name + " . And i live in " + address;
//     return `
//     My name is ${name}. I have been living in ${address}
//     `;

// }
// const ash = bio("Aashutosh Neupane" ,"Sydney")
// console.log(ash)

// const asaauh = bio("agv Neusdfdse" ,"dfsdfdsf")
// console.log(asaauh)

// =--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// let i= 5
// console.log(i++);
// console.log(++i)
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// loops
// for loop
// for(let i=0; i<=10; i++){
//  console.log("count  "+ i)
// }

// while loop
// let i=0;
// while(i<=10) {
// i++;
// console.log("count "+ i);
// }

//do while
// let i= 0
// do{
//     i++
//     if(i % 2 !== 0){
//       continue
//       //break
//     }
//     console.log(i)
// }while(i <= 100)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Data manipulation
// number = parseInt, float
//safe number: -2^53 -1 to 2^53 -1
// NaN => not a number ( isNaN)
// const val = isNaN(5)

// number namipulation
// const num = "5.99mm2"
// converts string into num 
// // const val = Number (num)
// // const val = +num
// gives first natural number in string 
// // const val = parseInt(num)
// gives first whole number (1.990) in string 
// const val = parseFloat(num)
// console.log(typeof val, val)

// string manupulation

// const str= "hi, my name, is aashutosh. I live in canberra"
// console.log(str)

// const val = str.length //gives total character in string including space
// const val = str.toUpperCase()//makes string uppercase
// const val = str.toLowerCase() //makes string lowercase
// const val = str.indexOf("i") // gives position of first string
// const val = str.lastIndexOf("i")// gives position of last i
//const val = str.replace("i", "u")// changes first i into u
// const val = str.replaceAll("i", "u") // Changes all i into u
// const val = str.substring(4, 10) // gives data from 4th position to 10th position
// const val = str.slice(4, 10)// gives data from 4th position to 10th position
// const val = str.slice(4) // gives all character after 4th position
// const val = str.includes("aashutosh")// checks if the character is in the input or not. in this case checks in aashutosh is present in the input r not and returns true or false.
// const val = str.charAt(10) // returns character at the specified position
// const val = str.charCodeAt(10)//returns character code at the specified position
// const val = str.split(",")
// const val = str.search("aashutosh")// searches for the character and gives the starting position 
// console.log(val)


//Array Manipulation

// const fruits = ["apple", "banana", "orange"]

// fruits.unshift("watermelon")
// fruits.push("mango")
// console.log(fruits[2])
// const data = fruits.length // gives length of array
// const data = fruits.unshift("watermelon") //adds watermelon to the start of array 
// const data = fruits.push("watermelon") //adds watermelon to the last position of array 
// const data = fruits.shift() //gives first item of array into data and removes from fruits
// const data = fruits.pop() //gives last item of array into data and removes from fruits
// // const data = fruits.slice(1,3) // gives item between the position specified and gives another sub array
// const data = fruits.splice(2,3) // gives 3 items from 2 position also removes them from the original array
// const data = fruits.length
// console.log(fruits)
// // fruits.sort() // sorts array by comparing the first character in string eg: a is first and z is last in ascending order
// fruits.reverse() // sorts array by comparing the first character in string eg: a is last and z is first in descending order
// console.log(fruits)
// =-=-=-=-=-=-=-=-=loops specific to array=-=--=-=-=-=-=-
// const fruits = ["mango", "apple", "banana", "orange", "mandarin"]
 // this gives all items in array and their respective index number
// fruits. forEach((item, i) => { 

// console.log(item, i)
// })


    
//     console.log(fruits, newArg)
// the following item returns all the items in fruits array inside newArg variable
// we can return desired output in  newArg by giving specific instruction in return part below
// const newArg = fruits.map((item, i) => { 
//     // here item is the characters in array and i is their index positions. we can give any variable we  want.
//    return item + "jdfnksd"
//     })
    
//     console.log(fruits, newArg)

// filter in array returns true values
// const newArg = fruits.filter((item, i) => { 

//    return !item.includes("m")
//     })
    
//     console.log(fruits, newArg)

//find and every in array
//find checks if our array has the searched character ("o") and returns the first value
// const newArg = fruits.find((item, i) => { 

//     return item.includes("o")
//      })
//every checks if every item includes "a" in array and returns ture or false
    //  const newArg = fruits.every((item, i) => { 

    //     return item.includes("a")
    //      })
     
    //  console.log(fruits, newArg)
// reduce
// const balance = [2,3,4,5,6]
// const total = balance.reduce((subtotal, num)=>{
//     return subtotal + num
// }, 0)

// console.log(total)

// Challenge:
// AN array of 50 random numbers range between 1 and 100 programmatically

// const random = []
// const i = 1
// for (i<=100){
//     const val = Math.random()*100
// console.log(val)

// }
// const ran = []
// const i = 0

// for (i<=100){
//     const val = Math.floor(Math.random()*101);
//     i++

// }
// // for (let i=0; i<=50;i++){
// //     const val = Math.floor(Math.random()*101); i++
// //     return 
// //     console.log(ran)
// }
let arr  = []
for(let i=0; i<50; i++){
    const val = Math.floor(Math.random(i)*101);
    const data = arr.push(val)
  
    }
    console.log(arr)

// 2. Sort array in descending order 
 const des = arr.sort(function(a,b){return b-a})
 console.log(des)

// 3. get the total value of array

const total = arr.reduce((subtotal, num)=>{
        return subtotal + num
    }, 0)
    
    console.log("The total value is = " + total)

//4. divide original array into odd array and even array
    // let a = 0;
    // do{
          
    //        a++;
    //         if(arr % 2 !== 0){
    //           continue
    //           //break
    //         }
    //         console.log(arr)
    //     }while(a <= 50)
    // const newArg = arr.filter((arr, i) => { 

    //        return includes(arr[i] % 2 === 0)
    //         })
            
    //         console.log(arr, newArg)
    let odd = []
    let even = []
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        // number is even
        even.push(arr[i])
      } else {
        // number is odd
        odd.push(arr[i])
      }
    }
    console.log("even [" + even , "] odd[ " +odd + "]" )
    
    // const dup = arr.filter((arr, i) =>{
    //    for (i<=arr.length;) {
    //     return (i!==arr)
    // }
    // })
    // console.log(dup)
    // const newArg = arr.filter((arr, i) => { 
    //     let odd = []
    //     let even = []
    //            if(arr[i] % 2 === 0)
    //            return even
    //            else{
    //             return odd
    //            }
    //             })
                
    //             console.log(odd , even )

//5. remove the duplicate value from the original array
const noRep = arr.filter((item, i) => arr.indexOf(item) ===i );
console.log(arr, noRep)


