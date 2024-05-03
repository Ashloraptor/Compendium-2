
const { Schema } = require('mongoose');

const plantHist = new Schema(
  {
    note_body: {
      type: String,
      maxlength: 280,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = plantHist;
