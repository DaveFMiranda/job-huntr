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
    $_id: ID!, 
    $company: String, 
    $role: String, 
    $offer: Boolean
    ) {
    updateJob(
      _id: $_id
      company: $company
      role: $role
      offer: $offer
    ) {
      company
      role
      offerMade
      createdAt
    }
  }
`;

export const DELETE_JOB = gql`
  mutation deleteJob($_id: ID!) {
    deleteJob(_id: $_id) {
      _id
      company
      role
      offerMade
      createdAt
    }
  }
`;

export const ADD_COMLOG = gql`
  mutation addComLog(
    $method: String!
    $content: String!
    $direction: String!
  ){
  addComLog(
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


// NOTE: delete this one it's from the source code
export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
