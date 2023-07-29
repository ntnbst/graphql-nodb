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
    IND
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    age: Int!
    username: String!
    nationality: String!
  }

  input UpdateUserInput {
    id: ID!
    username: String
    nationality: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!
    deleteUser(id: ID!): User
  }
`
module.exports = { typeDefs }
