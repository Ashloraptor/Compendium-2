const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  createdAt: String
  firstName: String
  lastName: String
  username: String
  email: String
  about: String
  posts: [Post]
  plants: [Plant]
}

  type UsersResult {
    users: [User]
  }

  type Plant {
    _id: ID!
    images: [String]!
    latitude: Float
    longitude: Float
    similar_images: Boolean
    custom_id: Int
    dateTime: String
    health: String
    classification_level: String
    classification_raw: Boolean
    
  }

  input PlantInput {
    images: [String]!
    latituded: Float
    longitude: Float
    similar_images: Boolean
    custom_id: Int
    dateTime: String
    health: String
    classification_level: String
    classification_raw: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    
    plants: [Plant]
    plan(id: ID!): Plant
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      username: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
      about: String
    ): User
    login(email: String!, password: String!): Auth
    addPost(postTitle: String!, postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    addPlantHistory(plantId: ID!, note_body: String): Plant
    removePlantHistory(plantId: ID!, historyId: ID!): Plant
    addPlant(
      scientific_name: String!
      common_name: String!
      image_path: String!
      usda_zone: String
      description: String
      pruning: String
      fertilization: String
      water: String
    ): Plant
    updatePlant(
      plantId: ID!
      common_name: String
      usda_zone: String
      image_path: String
      description: String
      pruning: String
      fertilization: String
      water: String
    ): Plant
    removePlant(plantId: ID!): Plant
    addFriend(friendId: ID!): User
    removeFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;