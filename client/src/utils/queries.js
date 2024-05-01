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

export const GET_USER_PROFILE = gql`
  query getUserProfile {
    me {
      _id
      username
      email
      plantCount
      savedPlants {
        _id
        title
        description
        authors
        image
        link
        createdAt
      }
    }
  }
`;

export const GET_PLANT_DETAILS = gql`
  query getPlantDetails($plantId: String!) {
    plant(plantId: $plantId) {
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

export const GET_SINGLE_PLANT = gql`
  query getSinglePlant($plantId: ID!) {
    plant(plantId: $plantId) {
      _id
      title
      description
      authors
      image
      link
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedPlants {
        _id
        title
        description
        authors
        image
        link
        createdAt
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