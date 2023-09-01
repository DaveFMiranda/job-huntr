import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob(
    $company: String!
    $role: String!
    $advertisedSalary: Int
    $offerMade: Boolean
  ) {
    addJob(
      company: $company
      role: $role
      advertisedSalary: $advertisedSalary
      offerMade: $offerMade
    ) {
      _id
      company
      role
      advertisedSalary
      offerMade
      createdAt
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation updateJob(
    $jobId: ID!
    $company: String
    $advertisedSalary: Int
    $role: String
    $offerMade: Boolean
  ) {
    updateJob(_id: $jobId, company: $company, advertisedSalary: $advertisedSalary, role: $role, offerMade: $offerMade) {
      company
      role
      advertisedSalary
      offerMade
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_JOB = gql`
  mutation deleteJob($_id: ID!) {
    deleteJob(_id: $_id)
  }
`;

export const ADD_CONTACT_PERSON = gql`
  mutation addContactPerson(
    $jobId: String
    $name: String
    $role: String
    $phone: String
    $email: String
    $notes: String
    ){
      addContactPerson(
        jobId: $jobId
        name: $name
        role: $role
        phone: $phone
        email: $email
        notes: $notes
      ){
        name
        role
        phone
        email
        notes
      }
    }
`;

export const UPDATE_CONTACT_PERSON = gql`
mutation updateContactPerson(
  $_id: ID!
  $name: String
  $role: String
  $phone: String
  $email: String
  $notes: String
){
  updateContactPerson(_id: $_id, name: $name, role: $role, phone: $phone, email: $email, notes: $notes){
    name
    role
    phone
    email
    notes
  }

}
`;

export const DELETE_CONTACT_PERSON = gql`
  mutation deleteContactPerson($_id: ID!, $jobId: String!) {
    deleteContactPerson(_id: $_id, jobId: $jobId)
  }
`;


export const ADD_COMLOG = gql`
  mutation addComLog(
    $jobId: String!
    $method: String!
    $content: String!
    $direction: String!

  ){
  addComLog(
    jobId: $jobId
    method: $method
    content: $content
    direction: $direction
  ){
    _id
    method
    content
    direction

  }}

`;

export const UPDATE_COMLOG = gql`
  mutation updateComLog(
    $_id: ID!
    $method: String!
    $content: String!
    $direction: String!

  ){
  updateComLog(
    _id: $_id
    method: $method
    content: $content
    direction: $direction
  ){
    _id
    method
    content
    direction
   
  }}

`;

export const DELETE_COMLOG = gql`
  mutation deleteComLog($_id: ID!, $jobId: String!) {
    deleteComLog(_id: $_id, jobId: $jobId)
  }
`;

export const ADD_QUESTION = gql`
  mutation addQuestion($question: String!, $response: String!) {
    addQuestion(question: $question, response: $response) {
      _id
      question
      response
    }
  }
`;

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($_id: ID!) {
    deleteQuestion(_id: $_id)
  }
`;

export const UPDATE_QUESTION = gql`
mutation updateQuestion(
  $question: String!
  $response: String!
){
  updateQuestion(
    question: $question
    response: $response
  ){
    _id
    question
    response

  }}
`;

export const ADD_TERMS = gql`
  mutation addEmploymentTerms(
    $employmentTerms: EmploymentTermsInput
  ){
    addEmploymentTerms(
      employmentTerms: $employmentTerms
    ){
      _id
      tenure
      salary
      insurance
      location
      flexibleHours
      PTO
      retirement
      parentalLeave
      training
      mentorship
      notes
    }
  }
`;


