let array = ["Lukas",25,true,null,undefined,[1,2,3]]
let object = {
    name: array[0],
    favNum: array[1],
    lovesCode: array[2],
    hobbies: ["Code","Video Games","DnD"]
}
const explainFacts = (obj) => {
    let nameSent = `This person's name is ${obj.name}.\n`
    let numSent = `Their favorite number is ${obj.favNum}\n`
    // let codeSent;
    // if(obj.lovesCode){
    //     codeSent = `They love to code.\n`
    // } else {
    //     codeSent = `They don't like coding.\n`
    // }
    let codeSent = obj.lovesCode ? `They love to code.\n` : `They don't like coding.\n`
    let hobbySent = `Their hobbies include ${obj.hobbies[0]}, ${obj.hobbies[1]}, ${obj.hobbies[2]}.`
    return nameSent + numSent + codeSent + hobbySent
}
console.log(explainFacts(object))