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
  comLogArray: [ComLog]!
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

type ComLog {
  method: String!
  content: String!
  direction: String!
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
    comLogs: [ComLog]
    comLog(_id: ID): ComLog
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

    deleteJob(_id: ID!): Job

    addComLog(method: String!
      content: String!
      direction: String!
      ): ComLog
  }
`;

module.exports = typeDefs;
