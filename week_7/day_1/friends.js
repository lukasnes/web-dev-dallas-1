let users = {
    1: {
        name: "John Smith",
        friends: [3,5]
    },
    2: {
        name: "Christine Agatha",
        friends: [3,4,5]
    },
    3: {
        name: "Max Johnson",
        friends: [1,2,5]
    },
    4: {
        name: "Joan Carlson",
        friends: [2]
    },
    5: {
        name: "Steve Herman",
        friends: [1,2,3]
    }
}

//Write a function that prints the following string for each user in the users array: 
//"${person}'s friends are ${friends}" where person is the person's name, and friends is a collection of their friends' names.

const findFriends = obj => {
    for(let id in obj){
        let friendNames = []
        let person = obj[id]
        let { name,friends } = person
        
        friends.forEach(friendId => friendNames.push(obj[friendId].name))

        console.log(`${name}'s friends are ${friendNames}`)
    }
}

findFriends(users)