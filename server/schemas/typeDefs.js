const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    createdAt: String 
    updatedAt: String 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Job {
    _id: ID
    company: String
    role: String
    advertisedSalary: Int
    offer: Boolean
    createdAt: String
    updatedAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    jobs: [Job]
    job(_id: ID!): Job
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String, lastName: String): Auth
    login(email: String!, password: String!): Auth
    addJob(company: String!, role: String!): Job
    updateJob(_id: ID!, company: String, role: String, offer: Boolean): Job
    deleteJob(_id: ID!): Job
  }
`;

module.exports = typeDefs;
