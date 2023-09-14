import { Model,DataTypes } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';
import dotenv from 'dotenv'
dotenv.config()
const { DB_CONNECT } = process.env

export const db = await connectToDB(DB_CONNECT);

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

export class Movie extends Model {
  [util.inspect.custom](){
    return this.toJSON()
  }
}

export class Rating extends Model {
  [util.inspect.custom](){
    return this.toJSON()
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    modelName: 'user',
    sequelize: db,
  },
);

Movie.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    overview: {
      type: DataTypes.TEXT
    },
    releaseDate: {
      type: DataTypes.DATE
    },
    posterPath: {
      type: DataTypes.STRING
    }
  },
  {
    modelName: 'movie',
    sequelize: db
  }
)

Rating.init(
  {
    ratingId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    modelName: 'rating',
    sequelize: db,
    timestamps: true,
    updatedAt: false
  }
)

User.hasMany(Rating, { foreignKey: 'userId' })
Rating.belongsTo(User, { foreignKey: 'userId' })

Movie.hasMany(Rating, { foreignKey: 'movieId' })
Rating.belongsTo(Movie, { foreignKey: 'movieId' })

// await db.sync({ force: true })

// const testUser = await User.create({ email: 'test@email.com', password: 'test' })
// const anotherUser = await User.create({ email: 'test2@email.com', password: 'test' })
// const testMovie = await Movie.create({ title: 'Interstellar' })
// // const testRating = await Rating.create({ score: 5 })
// await testUser.createRating({
//   score: 5,
//   movieId: testMovie.movieId
// })
// await anotherUser.createRating({
//   score: 4,
//   movieId: testMovie.movieId
// })

// console.log(testUser)
// console.log(testMovie)
// console.log(await testMovie.getRatings())
// console.log(testRating)