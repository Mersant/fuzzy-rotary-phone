import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      journalHistory {
        _id
        journalText
        # createdAt
      }
    }
  }
`;
export const QUERY_JOURNALS = gql`
  query getMessages {
    journals {
      _id
      journalText
      # createdAt
    }
  }
`;







