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
