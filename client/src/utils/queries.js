import { gql } from '@apollo/client';

export const GET_USER_PROFILE = gql`
  query getUserProfile {
    me {
      _id
      username
      email
      plantCount
      savedplants {
        _id
        authors
        description
        plantId
        image
        link
        title
      }
    }
  }
`;

export const GET_PLANT_DETAILS = gql`
  query getPlantDetails($plantId: String!) {
    plant(plantId: $plantId) {
      _id
      authors
      description
      plantId
      image
      link
      title
    }
  }
`;