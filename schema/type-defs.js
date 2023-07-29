const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Contry!
    friends: [User!]
    favMovies: [Movie!]
  }

  type Movie {
    id: ID!
    name: String!
    launchDate: Int!
    isInTheatres: Boolean!
  }

  enum Contry {
    ARG
    POL
    ENG
    USA
    GER
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
`
module.exports = { typeDefs }
