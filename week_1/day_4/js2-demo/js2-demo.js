let myName = "Lukas"

const greetingMachine = (greeting, name) => {
    return greeting(name)
}
const addFive = (num) => {
    return 5 + num
}
greetingMachine(addFive, myName)

const yo = (name) => {
    return `Yo, ${name}!`
}
const sup = (name) => {
    return `'Sup, ${name}?`
}
const hello = (name) => {
    return `Hello, ${name}, how are you?`
}

console.log(greetingMachine(yo, "Lukas"))
console.log(greetingMachine(hello, "Parker"))
console.log(greetingMachine(sup,"dude"))

// hello = 25
let greetings = [yo, sup, hello]
let names = ["Lukas","Parker","Sam","Joe","Tara","Michael","Giovanni"]

console.log(greetingMachine(greetings[0],names[4]))
// console.log(Math.floor(Math.random() * greetings.length))
// console.log(parseFloat(2.456677544.toFixed(2)))

const getRandVal = (arr) => {
    let randInt = Math.floor(Math.random() * arr.length)
    return arr[randInt]
}

console.log(getRandVal(names))
console.log(greetingMachine(getRandVal(greetings),getRandVal(names)))

//========================================
// This is a way to keep notes

const milleniumFalcon = {
    name: "Millenium Falcon",
    hull: 100,
    shields: 50,
    power: 30,
    attack: (target) => {
        if(target.shields > 0){
            target.shields -= milleniumFalcon.power
            console.log(`${target.name}'s shields took a heavy hit!`)
        } else if (target.shields <= 0){
            target.hull -= milleniumFalcon.power
            target.hull > 50 ? console.log(`${target.name} took a direct hit!`) : console.log(`${target.name}'s hull is critical!`)
        }
    }
}
const starshipEnterprise = {
    name: "Starship Enterprise",
    hull: 100,
    shields: 100,
    power: 5,
    attack: (target) => {
        if(target.shields > 0){
            for(let i = 0; i < 3; i++){
                target.shields -= starshipEnterprise.power
            }
            console.log(`${target.name} received a laser barrage!`)
        } else if (target.shields <= 0){
            for(let i = 0; i < 5; i++){
                target.hull -= starshipEnterprise.power
            }
            target.hull > 50 ? console.log(`${target.name}'s hull has been peppered!`) : console.log(`${target.name}'s hull is critical!`)
        }
    }
}
// milleniumFalcon.attack(starshipEnterprise)
// console.log(starshipEnterprise.shields)
// starshipEnterprise.attack(milleniumFalcon)
// console.log(milleniumFalcon.shields)
let rounds = 0
while(starshipEnterprise.hull > 0 || milleniumFalcon.hull > 0){
    milleniumFalcon.attack(starshipEnterprise)
    starshipEnterprise.attack(milleniumFalcon)
    rounds++
}

starshipEnterprise.hull <= 0 ? console.log(`The Starship Enterprise is no more.`) : console.log(`The Millenium Falcon is no more.`)
console.log(milleniumFalcon.hull)


let arr = []
arr.push(4)
arr.push(7)
arr.push(20)
console.log(arr)
let evens = []
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i])
        evens.push(arr[i])
    }
}
console.log(evens)