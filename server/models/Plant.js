const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPlants` array in User.js
const plantSchema = new Schema({
  images: [
    {
      type: String,
    },
  ],
//   latitude: {
//     type: Float,
//   },
//   longitude: {
//     type: Float,
//   },
  similar_images: {
    type: Boolean,
  },
  // Supposed to be Plant.ID's ID for plants
//   custom_id: {
//     type: Int,
//   },
  dateTime: {
    type: String,
  },
  health: {
    type: String,
  },
  classification_level: {
    type: String,
  },
  classification_raw: {
    type: Boolean,
  },
});

module.exports = plantSchema;
