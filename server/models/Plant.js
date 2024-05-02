const plantHist = require('./PlantHistory');

const { Schema, model } = require('mongoose');

const plants= new Schema(
  {
   
    scientific_name: {
      type: String,
      required: true,
    },
    common_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 500
    },
    image_path: {
      type: String,
      required: true,
    },
    usda_zone: {
      type: String,
    },
    pruning: {
      type: String,
    },
    fertilization: {
      type: String,
    },
    water: {
      type: String,
    },
    plantHistory: [plantHist],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Plant = model('Plant', plants);

module.exports = Plant;
