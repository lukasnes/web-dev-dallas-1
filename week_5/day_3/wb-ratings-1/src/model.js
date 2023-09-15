import { Model, DataTypes } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///ratings');

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

export class Movie extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

export class Rating extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
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
      allowNull: false,
    },

  },
  {
    modelName: 'user',
    sequelize: db,
  },
);

Movie.init(
  {
    movieId:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    movieTitle:{
      type: DataTypes.STRING
    }
  },
  {

  })

await db.sync({force: true})

const testUser = await User.create({email: 'test@test.com', password: 'test'})
console.log(testUser)