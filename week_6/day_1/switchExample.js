const howIsTheStudent = student => {
    let { name,grade } = student
    switch(grade){
        case "A":
            return `${name} is doing excellently!`
        case "B":
            return `${name} is doing well.`
        case "C":
            return `${name} needs to study a little.`
        case "D":
            return `${name} is doing poorly.`
        case "F":
            return `${name} is really struggling.`
        default:
            return `Must have an elligible letter grade!`
    }
}
//========================================================
console.log(howIsTheStudent({ name:"Barbara",grade:"B" }))
console.log(howIsTheStudent({ name:"Collin",grade:"A" }))
console.log(howIsTheStudent({ name:"Jackson",grade:"F" }))
console.log(howIsTheStudent({ name:"Holly",grade:true }))