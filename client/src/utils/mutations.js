import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $about: String
    $email: String
    $firstName: String
    $lastName: String
  ) {
    updateUser(
      about: $about
      email: $email
      firstName: $firstName
      lastName: $lastName
    ) {
      createdAt
      firstName
      lastName
      username
      email
      about
     
    }
  }
`;

export const ADD_PLANT = gql`
  mutation ADD_PLANT(
    $scientificName: String!
    $commonName: String!
    $imagePath: String!
    $description: String
    
  ) {
    addPlant(
      scientific_name: $scientificName
      common_name: $commonName
      description: $description
      image_path: $imagePath
    ) {
      _id
      createdAt
      scientific_name
      common_name
      description
      image_path
    }
  }
`;

export const UPDATE_PLANT = gql`
  mutation UPDATE_PLANT(
    $plantId: ID!
    $imagePath: String
    $commonName: String!
    $description: String
  ) {
    updatePlant(
      plantId: $plantId
      image_path: $imagePath
      common_name: $commonName
      description: $description
    ) {
      _id
      createdAt
      scientific_name
      common_name
      image_path
      description
      image_path
    }
  }
`;

export const REMOVE_PLANT = gql`
  mutation REMOVE_PLANT($plantId: ID!) {
    removePlant(plantId: $plantId) {
      _id
      createdAt
      scientific_name
      common_name
      description
      image_path
      plantHistory {
        _id
        createdAt
        note_body
      }
    }
  }
`;

export const ADD_PLANT_HISTORY = gql`
  mutation ADD_PLANT_HISTORY($plantId: ID!, $noteBody: String) {
    addPlantHistory(plantId: $plantId, note_body: $noteBody) {
      _id
      createdAt
      scientific_name
      common_name
      description
      image_path
      plantHistory {
        createdAt
        note_body
      }

    }
  }
`;

export const REMOVE_HISTORY = gql`
  mutation REMOVE_HISTORY($plantId: ID!, $historyId: ID!) {
    removePlantHistory(plantId: $plantId, historyId: $historyId) {
      _id
      createdAt
      scientific_name
      common_name
      description
      image_path
      plantHistory {
        _id
        createdAt
        note_body
      }
    }
  }
`;


