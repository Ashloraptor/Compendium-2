import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
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
