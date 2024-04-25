const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    plantCount: Int!
    savedPlants: [Plant]!
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    savePlant(plant: PlantInput!): User
    removePlant(plantId: String!): User
  }
`;

module.exports = typeDefs;
