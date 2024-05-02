const { Schema } = require('mongoose');


const comments = new Schema(
  {
    commentBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = comments;
