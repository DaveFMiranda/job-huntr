const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
   savedJobs: [Job]!
   savedQuestions: [CommonQuestions]!
   employmentTerms: EmploymentTerms
  }

  type Job {
    _id: ID
    company: String!
    role: String!
    advertisedSalary: Int
    offerMade: Boolean
    contactPerson: Contact
    comLogArray: [ComLog]!
    createdAt: String
    updatedAt: String
  }

  type Contact {
    _id: ID
    name: String
    role: String
    phone: String
    email: String
    notes: String
  }

  input EmploymentTermsInput {
    tenure: String
    salary: Int
    insurance: Boolean
    location: String
    flexibleHours: Boolean
    PTO: Int
    retirement: Boolean
    parentalLeave: Boolean
    training: Boolean
    mentorship: Boolean
    notes: String
  }

  type CommonQuestions {
    _id: ID
    question: String!
    response: String!
  }

  type ComLog {
    _id: ID
    method: String!
    content: String!
    direction: String!
  }

  type EmploymentTerms {
    tenure: String
    salary: Int
    insurance: Boolean
    location: String
    flexibleHours: Boolean
    PTO: Int
    retirement: Boolean
    parentalLeave: Boolean
    training: Boolean
    mentorship: Boolean
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
    questions: [CommonQuestions]
    question(_id: ID): CommonQuestions
    comLogs: [ComLog]
    comLog(_id: ID): ComLog
    employmentTerms: User
    contacts: [Contact]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String, lastName: String): Auth
    login(email: String!, password: String!): Auth
    addJob( 
      company: String!
      role: String!
      advertisedSalary: Int
      offerMade: Boolean
      ): Job
    addQuestion(question: String!, response: String!): CommonQuestions
    updateQuestion(_id: ID!, question: String!, response: String!): CommonQuestions
    deleteQuestion(_id: ID!): Boolean
    updateJob(_id: ID!, company: String, advertisedSalary: Int, role: String, offerMade: Boolean): Job
    deleteJob(_id: ID!): Boolean
    addComLog(
      jobId: String!
      method: String!
      content: String!
      direction: String!
      ): ComLog
    updateComLog(_id: ID!, method: String, content: String, direction: String): ComLog
    deleteComLog(_id: ID!, jobId: String!): Boolean
    addContactPerson(
      jobId: String
      name: String
      role: String
      phone: String
      email: String
      notes: String): Contact
    updateContactPerson(_id: ID!, name: String, role: String, phone: String, email: String, notes: String): Contact
    deleteContactPerson(_id: ID!, jobId: String!): Boolean
    addEmploymentTerms(employmentTerms: EmploymentTermsInput): EmploymentTerms
  }
`;

module.exports = typeDefs;
