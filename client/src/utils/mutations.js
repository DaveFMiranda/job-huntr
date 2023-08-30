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
    $contactPerson: ContactPersonInput
  ) {
    addJob(
      company: $company
      role: $role
      advertisedSalary: $advertisedSalary
      offerMade: $offerMade
      contactPerson: $contactPerson
    ) {
      _id
      company
      role
      advertisedSalary
      contactPerson {
        name
        role
        phone
        email
        notes
      }
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
    createdAt
    updatedAt
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
    createdAt
    updatedAt
  }}

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


