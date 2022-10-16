const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    journal: [Journal]!
  }

  type Journal {
    _id: ID
    journalText: String
    image: String
    createdAt: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    journals(username: String): [Journal]
    journal(journalId: ID!): Journal
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addJournal(journalText: String!,image:String): Journal
  }
`;

module.exports = typeDefs;