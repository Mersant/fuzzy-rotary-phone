import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      journalHistory {
        _id
        journalText
        createdAt
      }
    }
  }
`;
export const QUERY_JOURNALS = gql`
  query getJournals {
    journals {
      _id
      journalText
      createdAt
    }
  }
`;


export const QUERY_SINGLE_JOURNAL = gql`
  query getSingleJournal($journalId: ID!) {
    journal(journalId: $journalId) {
      _id
      journalText
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      journal {
        _id
        journalText 
        createdAt
      }
    }
  }
`;



