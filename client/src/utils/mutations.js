// import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const ADD_USER = gql`
//   mutation addUser($email: String!, $username: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//         token
//         user {
//           _id
//           username
//         }
//       }
//     }
//   `;

// export const SAVE_plant = gql`
// mutation saveplant($plant: plantInput!){
//   saveplant(plant: $plant) {
//     _id
//     username
//     email
//     plantCount
//     savedplants{
//       _id
//       authors
//       description
//       plantId
//       image
//       link
//       title
//     }
//   }
// }`;

// export const REMOVE_plant = gql`
// mutation removeplant($plantId: String!){
//   removeplant(plantId: $plantId) {
//     _id
//     username
//     email
//     plantCount
//     savedplants{
//       _id
//       authors
//       description
//       plantId
//       image
//       link
//       title
//     }
//   }
// }`

import { gql } from '@apollo/client';


export const SIGNUP_USER = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id
      username
      email
      token
    }
  }
`;

export const SAVE_PLANT = gql`
mutation savePlant($plantId: ID!, $commentText: String!) {
  savePlant(plantId: $plantId, commentText: $commentText) {
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
      comment {
        _id
        text
      }
    }
  }
}
`;

export const COMMENT_ON_PLANT = gql`
  mutation commentOnPlant($plantId: ID!, $commentText: String!) {
    commentOnPlant(plantId: $plantId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
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

export const REMOVE_PLANT = gql`
  mutation removePlant($plantId: ID!) {
    removePlant(plantId: $plantId) {
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