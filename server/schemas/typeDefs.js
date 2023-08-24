const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
   savedJobs: [Job]!
  }

type Job {
  _id: ID
  company: String!
  role: String!
  advertisedSalary: Int
  offerMade: Boolean
  createdAt: String
  updatedAt: String
}

type Contact {
  _id: ID
  name: String!
  role: String
  phone: String
  email: String

}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    jobs: [Job]
    job(_id: ID): Job

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String, lastName: String): Auth
    login(email: String!, password: String!): Auth
    addJob( company: String!
      role: String!
      advertisedSalary: Int
      offerMade: Boolean
      ): Job
    updateJob(_id: ID!, company: String, role: String, offerMade: Boolean): Job
  }
`;

module.exports = typeDefs;
