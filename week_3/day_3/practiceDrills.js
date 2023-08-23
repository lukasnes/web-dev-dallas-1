let users = []
class User {
    constructor(firstName,lastName,username,password,email){
        this.first = firstName
        this.last = lastName
        this.user = username
        this.password = password
        this.email = email

        this.subscribed = false
        users.push(this)
    }

    subscribe = () => {
        if(this.subscribed){
            this.subscribed = false
            return `${this.user} has unsubscribed`
        } else {
            this.subscribed = true
            return `${this.user} has subscribed. Welcome!`
        }
    }
}

let lukas = new User('Lukas','Nesittka','Lukas Withakay','pass','test@test.com')
let ian = new User('Ian','Smith','IanTheG','ianianian','ian@test.com')
let michael = new User('Michael','Scott','The Boss','password','boss@test.com')
let steve = new User('steve','Potts','HumanPerson','thisIsNotAPassword','test@testmail.com')
let travis = new User('Travis','Johnson','BigJohn','wordpass','email@test.com')

// users.push(lukas,ian,michael,steve,travis)

const subscribeByName = (arr) => {
    arr.forEach(user => {
        let { first } = user
        first = first.toLowerCase()
        if(first[0] === 's' || first.startsWith('m') || first[0] === 'l'){
            user.subscribe()
        }
    })
}
subscribeByName(users)
console.log(users)