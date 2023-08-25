const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
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
  contactPerson: ContactPerson
  createdAt: String
  updatedAt: String
}

type ContactPerson {
  name: String!
  role: String
  phone: String
  email: String
  notes: String
}

input ContactPersonInput {
  name: String!
  role: String
  phone: String
  email: String
  notes: String
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
      contactPerson: ContactPersonInput
      ): Job
  }
`;

module.exports = typeDefs;
