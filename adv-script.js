// Object oriented programming (OOP)
// Object => properties, methods

// const ashBio = ()=> {
//     return "this person name is aashutosh and lives in canberra"
// }
// const ashiBio = ()=> {
//     return "this person name is kjshdja and lives in sydney"
// }

const ashiBio = (name, add) => {
 
    return{
        personName: name,
        address: add,
        bio( ){
            
            return ` this person name is ${name} and lives in ${add} `
        }
    }
    
}
const ash = ashiBio("ash", "canberra")
console.log(ashiBio())
// console.log(ashiBio("dfjhn", "ijdisi"))