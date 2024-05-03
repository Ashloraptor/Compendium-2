// import { gql } from '@apollo/client';

// export const GET_USER_PROFILE = gql`
//   query getUserProfile {
//     me {
//       _id
//       username
//       email
//       plantCount
//       savedplants {
//         _id
//         authors
//         description
//         plantId
//         image
//         link
//         title
//       }
//     }
//   }
// `;

// export const GET_PLANT_DETAILS = gql`
//   query getPlantDetails($plantId: String!) {
//     plant(plantId: $plantId) {
//       _id
//       authors
//       description
//       plantId
//       image
//       link
//       title
//     }
//   }
// `;
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
      password
      savedPlants{
        _id
        images
        latitude
        longitude
        similar_images
        custom_id
        dateTime
        health
        classification_level
        classification_raw
      }
    }
  }
`;

// export const QUERY_USER = gql`
//   query user {
//     user {
//       _id
//       username
//       email
//       password
//       savedPlants{
//         _id
//         images
//         latitude
//         longitude
//         similar_images
//         custom_id
//         dateTime
//         health
//         classification_level
//         classification_raw
//       }
//     }
//   }
// `;

///check in to make sure these changes dont effect the back end