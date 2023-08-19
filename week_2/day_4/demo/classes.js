class Bootcamp {
    constructor(name,style = 'Web Dev'){
        this.name = name
        this.style = style

        this.difficulty = 'hard'
    }
}

let mountain = new Bootcamp('Dev Mountain')
let hackbrite = new Bootcamp('Hackbrite')

console.log(mountain)

Bootcamp.prototype.onCampus = true

console.log(mountain.onCampus)
console.log(hackbrite.onCampus)
hackbrite.onCampus = false
console.log(mountain.onCampus)
console.log(hackbrite.onCampus)