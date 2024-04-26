import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      password
      savedBooks{
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
