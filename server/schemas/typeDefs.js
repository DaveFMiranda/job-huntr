const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
   savedJobs: [Job]!
   savedQuestions: [CommonQuestions!]
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

type CommonQuestions {
  _id: ID
  question: String!
  response: String!
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
    questions: [CommonQuestions]
    comLogs: [ComLog]
    comLog(_id: ID): ComLog
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String, lastName: String): Auth
    login(email: String!, password: String!): Auth
    addJob( company: String!
      role: String!
      advertisedSalary: Int
      contactPerson: ContactPersonInput
      offerMade: Boolean
      ): Job
      addQuestion(question: String!, response: String!): CommonQuestions
      updateQuestion(_id:ID!, question: String, response: String): CommonQuestions
    updateJob(_id: ID!, company: String, role: String, offerMade: Boolean): Job

    addComLog(method: String!
      content: String!
      direction: String!
      ): ComLog
  }
`;

module.exports = typeDefs;
