const { Schema, model } = require('mongoose');
const plantSchema = require('./Plant');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  savedPlants: [plantSchema], // Array of Plant subdocuments
});

const User = model('User', userSchema);

module.exports = User;
