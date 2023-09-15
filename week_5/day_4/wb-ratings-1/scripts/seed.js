import { Movie,Rating,User,db } from '../src/model.js'
import lodash from 'lodash'
import movieData from './data/movies.json' assert { type: 'json' }

console.log(`Syncing database...`)
await db.sync({ force: true })

console.log(`Seeding database...`)

const moviesInDb = await Promise.all(
    movieData.map( async(movie) => {
        const releaseDate = new Date(Date.parse(movie.releaseDate))
        const {title,overview,posterPath} = movie
        
        const newMovie = await Movie.create({
            title,
            overview,
            posterPath,
            releaseDate
        })

        return newMovie
    })
)

const usersToCreate = []
for(let i = 0; i < 10; i++){
    usersToCreate.push(await User.create({ email: `test${i}@email.com`, password: 'test' }))
}

const usersInDb = await Promise.all(usersToCreate)

const ratingsInDb = await Promise.all(
    usersInDb.flatMap((user) => {
        const randomMovies = lodash.sampleSize(moviesInDb,10)

        const movieRatings = randomMovies.map((movie) => {
            return Rating.create({
                score: lodash.random(1,5),
                userId: user.userId,
                movieId: movie.movieId
            })
        })

        return movieRatings
    })
)

console.log(moviesInDb)
console.log(usersInDb)
console.log(ratingsInDb)
await db.close()
console.log(`Finished seeding database.`)