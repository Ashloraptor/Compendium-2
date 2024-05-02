import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      createdAt
      username
      email
    
      plants {
        _id
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
  }
`;

export const QUERY_ALL_USERS = gql`
  query Users {
    users {
      _id
      createdAt
      username
      email
      plants {
        _id
        scientific_name
        common_name
        description
        image_path
      }
    }
  }
`;
////////
export const SEARCH_USER_QUERY = gql`
  query GetUsers($search: String) {
    getUsers(search: $search) {
      users {

        username
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      _id
      createdAt
      firstName
      lastName
      username
      email
      posts {
        _id
        username
        commentCount
        comments {
          _id
          commentBody
          createdAt
          username
        }
      }
      plants {
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
  }
`;


export const SEARCH_PLANTS = gql`
  query searchPlants($query: String!) {
    searchPlants(query: $query) {
      _id
      title
      description
      authors
      image
      link
      createdAt
    }
  }
`;

export const QUERY_PLANT = gql`
  query QUERY_PLANT($id: ID!) {
    plant(_id: $id) {
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
