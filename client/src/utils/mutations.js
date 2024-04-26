import { gql } from '@apollo/client';

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
  mutation addUser($email: String!, $username: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
        }
      }
    }
  `;

export const SAVE_plant = gql`
mutation saveplant($plant: plantInput!){
  saveplant(plant: $plant) {
    _id
    username
    email
    plantCount
    savedplants{
      _id
      authors
      description
      plantId
      image
      link
      title
    }
  }
}`;

export const REMOVE_plant = gql`
mutation removeplant($plantId: String!){
  removeplant(plantId: $plantId) {
    _id
    username
    email
    plantCount
    savedplants{
      _id
      authors
      description
      plantId
      image
      link
      title
    }
  }
}`