// import data from './data.json'
// let data = require('./data.json')
// console.log(data)

// data.forEach(personObj => {
//     // console.log(`Hi, my name is ${personObj.name}, and I am ${personObj.age} years old`)

//     for(const info in personObj){
//         // if(info === 'name')
//         console.log(`My ${info} is ${personObj[info]}`)
//         console.log("=========================")
//     }
// })

// for(let i = 0; i < something; i++){

// }

let object = require('./object.json')

for(let info in object){
    console.log(`My ${info} is ${object[info]}`)
}