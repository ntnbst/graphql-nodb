const { userData, movieData } = require('../data')

const resolvers = {
  Query: {
    users: () => {
      return userData
    },
    user: (parent, args) => {
      const id = args.id
      const user = userData.find((user) => Number(user.id) === Number(id))
      return user
    },
    movies: () => {
      return movieData
    },
    movie: (parent, args) => {
      const name = args.name
      const movie = movieData.find((movie) => movie.name.includes(name))
      return movie
    },
  },

  // linking or dynamic insert
  User: {
    favMovies: () => {
      return [{ name: 'hello' }, { name: 'lol what' }] 
    },
  },
}

module.exports = { resolvers }
