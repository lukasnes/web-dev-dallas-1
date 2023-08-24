import mountainSongs from './mountain.json' assert { type: 'json' }

console.log(Object.keys(mountainSongs))
console.log(mountainSongs['results'][0].artistName)

const firstSong = mountainSongs['results'][0]

console.log(firstSong['trackName'])
