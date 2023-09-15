const generateLib = () => {
    const madlibs = [
        "The #color# #noun# likes to #verb# over the #adjective# lawn.",
        "The #adjective# #noun# has to #verb# the house #color#.",
        "Every #color# #noun# will often #verb# in a totally #adjective# way."
    ]

    const randIndex = Math.floor(Math.random() * madlibs.length)
    return madlibs[randIndex]
}

const createMadLib = (madlib,{ noun,color,adjective,verb }) => {
    // let { noun,color,adjective,verb } = libObj

    madlib = madlib.replace('#noun#',noun)
    madlib = madlib.replace('#adjective#',adjective)
    madlib = madlib.replace('#verb#',verb)
    madlib = madlib.replace('#color#',color)

    return madlib
}

console.log(createMadLib(generateLib(),{ noun: "cat", color: "orange", adjective: "fluffy", verb: "jump" }))

console.log('Hello, xxxxxxx'.replace('x',"Lukas"))