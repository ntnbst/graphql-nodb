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

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input
      const lastId = userData[userData.length - 1].id
      user.id = lastId + 1
      userData.push(user)
      return user
    },
    updateUser: (parent, args) => {
      const { id, username, nationality } = args.input
      const selectedUser = userData.find((user) => user.id === id)
      if (username) {
        selectedUser.username = username
      }
      if (nationality) {
        selectedUser.nationality = nationality
      }
      return selectedUser
    },
    deleteUser: (parent, args) => {
      const { id } = args
      const indexToBeDeleted = userData.findIndex((user) => user.id === id)
      if (indexToBeDeleted !== -1) {
        const deletedUser = userData.splice(indexToBeDeleted, 1)
        return deletedUser
      }
      return null
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
