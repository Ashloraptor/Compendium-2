const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const Posts = new Schema(
  {
    postTitle: {
      type: String,
      required: 'Title!',
      minlength: 1,
      maxlength: 280
    },
    postText: {
      type: String,
      required: 'Title',
      minlength: 1,
      maxlength: 280
    },
    
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

Posts.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', Posts);

module.exports = Post;